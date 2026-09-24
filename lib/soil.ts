import type { SoilProfile } from "@/lib/types";

type SdaTable = {
  Table?: unknown[][];
};

function pickNumber(value: unknown, fallback: number): number {
  if (value == null || value === "") return fallback;
  const n = typeof value === "number" ? value : Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function pickString(value: unknown, fallback: string): string {
  if (typeof value === "string" && value.trim()) return value.trim();
  return fallback;
}

function rowToProfile(row: unknown[]): SoilProfile | null {
  const texture = pickString(row[3], "");
  const phLow = pickNumber(row[4], NaN);
  const phHigh = pickNumber(row[5], NaN);
  if (!texture || !Number.isFinite(phLow) || !Number.isFinite(phHigh)) return null;
  return {
    mapUnitName: pickString(row[0], "Unknown map unit"),
    componentName: pickString(row[1], "Unknown component"),
    drainage: pickString(row[2], "Unknown drainage"),
    texture,
    phLow,
    phHigh,
  };
}

/** If the pin is urban land with no measured soil, use the nearest mapped component. */
function areaSql(lat: number, lon: number, sideLengthMeters: number): string {
  const latDelta = sideLengthMeters / 111000;
  const lonDelta = sideLengthMeters / (111000 * Math.cos((lat * Math.PI) / 180));
  const minLat = lat - latDelta / 2;
  const maxLat = lat + latDelta / 2;
  const minLon = lon - lonDelta / 2;
  const maxLon = lon + lonDelta / 2;
  const wkt = `POLYGON((${minLon} ${minLat}, ${maxLon} ${minLat}, ${maxLon} ${maxLat}, ${minLon} ${maxLat}, ${minLon} ${minLat}))`;
  return `
~DeclareGeometry(@aoi)~
select @aoi = geometry::STPolyFromText('${wkt}', 4326);
~DeclareIdGeomTable(@intersectedPolygonGeometries)~
~GetClippedMapunits(@aoi,polygon,geo,@intersectedPolygonGeometries)~
~DeclareIdGeogTable(@intersectedPolygonGeographies)~
~GetGeogFromGeomWgs84(@intersectedPolygonGeometries,@intersectedPolygonGeographies)~
SELECT TOP 1
  M.muname,
  C.compname,
  C.drainagecl,
  (SELECT TOP 1 ct.texcl
     FROM chorizon hz
     INNER JOIN chtexturegrp ctg ON ctg.chkey = hz.chkey AND ctg.rvindicator = 'Yes'
     INNER JOIN chtexture ct ON ct.chtgkey = ctg.chtgkey
     WHERE hz.cokey = C.cokey
     ORDER BY hz.hzdept_r),
  (SELECT TOP 1 hz.ph1to1h2o_l FROM chorizon hz WHERE hz.cokey = C.cokey ORDER BY hz.hzdept_r),
  (SELECT TOP 1 hz.ph1to1h2o_h FROM chorizon hz WHERE hz.cokey = C.cokey ORDER BY hz.hzdept_r)
FROM @intersectedPolygonGeographies P
INNER JOIN mapunit M ON P.id = M.mukey
INNER JOIN component C ON M.mukey = C.mukey AND C.majcompflag = 'Yes'
GROUP BY M.mukey, M.muname, C.cokey, C.compname, C.drainagecl, C.comppct_r
HAVING (SELECT TOP 1 ct.texcl
     FROM chorizon hz
     INNER JOIN chtexturegrp ctg ON ctg.chkey = hz.chkey AND ctg.rvindicator = 'Yes'
     INNER JOIN chtexture ct ON ct.chtgkey = ctg.chtgkey
     WHERE hz.cokey = C.cokey
     ORDER BY hz.hzdept_r) IS NOT NULL
ORDER BY SUM(geog.STArea()) DESC
`.trim();
}

export async function fetchSoil(
  lat: number,
  lon: number,
): Promise<SoilProfile> {
  const pointSql = `
SELECT TOP 1
  mu.muname,
  c.compname,
  c.drainagecl,
  ct.texcl,
  hz.ph1to1h2o_l,
  hz.ph1to1h2o_h
FROM mapunit AS mu
INNER JOIN component AS c ON c.mukey = mu.mukey AND c.majcompflag = 'Yes'
LEFT OUTER JOIN chorizon AS hz ON hz.cokey = c.cokey
  AND hz.hzdept_r = (SELECT MIN(hzdept_r) FROM chorizon WHERE cokey = c.cokey)
LEFT OUTER JOIN chtexturegrp AS ctg ON ctg.chkey = hz.chkey AND ctg.rvindicator = 'Yes'
LEFT OUTER JOIN chtexture AS ct ON ct.chtgkey = ctg.chtgkey
WHERE mu.mukey IN (
  SELECT * FROM SDA_Get_Mukey_from_intersection_with_WktWgs84('POINT(${lon} ${lat})')
)
ORDER BY c.comppct_r DESC
`.trim();

  const point = await runQuery(pointSql);
  const pointRow = point.Table?.[0];
  const profile = pointRow && pointRow.length >= 6 ? rowToProfile(pointRow) : null;
  if (profile) return profile;

  const nearby = await runQuery(areaSql(lat, lon, 3000));
  const nearbyRow = nearby.Table?.[0];
  const nearbyProfile = nearbyRow && nearbyRow.length >= 6 ? rowToProfile(nearbyRow) : null;
  if (nearbyProfile) return nearbyProfile;

  throw new Error("No SSURGO map unit at point");
}

async function runQuery(sql: string): Promise<SdaTable> {
  const res = await fetch("https://SDMDataAccess.sc.egov.usda.gov/Tabular/post.rest", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query: sql, format: "JSON" }),
    next: { revalidate: 0 },
  });

  if (!res.ok) throw new Error(`SSURGO error ${res.status}`);
  return (await res.json()) as SdaTable;
}
