import type { SoilProfile } from "@/lib/types";

type SdaTable = {
  Table?: unknown[][];
};

function pickNumber(value: unknown, fallback: number): number {
  const n = typeof value === "number" ? value : Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function pickString(value: unknown, fallback: string): string {
  if (typeof value === "string" && value.trim()) return value.trim();
  return fallback;
}

export async function fetchSoil(
  lat: number,
  lon: number,
): Promise<SoilProfile> {
  const sql = `
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

  const body = new URLSearchParams({
    query: sql,
    format: "JSON",
  });

  const res = await fetch(
    "https://SDMDataAccess.sc.egov.usda.gov/Tabular/post.rest",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      next: { revalidate: 0 },
    },
  );

  if (!res.ok) {
    throw new Error(`SSURGO error ${res.status}`);
  }

  const data = (await res.json()) as SdaTable;
  const row = data.Table?.[0];
  if (!row || row.length < 6) {
    throw new Error("No SSURGO map unit at point");
  }

  return {
    mapUnitName: pickString(row[0], "Unknown map unit"),
    componentName: pickString(row[1], "Unknown component"),
    drainage: pickString(row[2], "Unknown drainage"),
    texture: pickString(row[3], "Unknown texture"),
    phLow: pickNumber(row[4], 5.5),
    phHigh: pickNumber(row[5], 6.5),
  };
}
