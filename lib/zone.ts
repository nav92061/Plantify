const ZCTA_LAYER =
  "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Current/MapServer/2/query";

type ZctaResponse = {
  features?: Array<{ attributes?: Record<string, unknown> }>;
};

function zipFromAttributes(attributes: Record<string, unknown> | undefined): string | null {
  const raw = attributes?.ZCTA5 ?? attributes?.GEOID ?? attributes?.BASENAME;
  if (raw == null) return null;
  const digits = String(raw).replace(/\D/g, "");
  if (digits.length < 3 || digits.length > 5) return null;
  return digits.padStart(5, "0");
}

async function queryZcta(params: Record<string, string>): Promise<string | null> {
  const url = new URL(ZCTA_LAYER);
  url.searchParams.set("inSR", "4326");
  url.searchParams.set("spatialRel", "esriSpatialRelIntersects");
  url.searchParams.set("outFields", "ZCTA5,GEOID,BASENAME");
  url.searchParams.set("returnGeometry", "false");
  url.searchParams.set("f", "json");
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }

  const res = await fetch(url.toString(), { headers: { Accept: "application/json" } });
  if (!res.ok) return null;
  const data = (await res.json()) as ZctaResponse;
  return zipFromAttributes(data.features?.[0]?.attributes);
}

/** Census address geocoder vintages do not include ZIP polygons. This layer does. */
async function zipFromTiger(lat: number, lon: number): Promise<string | null> {
  const direct = await queryZcta({
    geometry: `${lon},${lat}`,
    geometryType: "esriGeometryPoint",
  });
  if (direct) return direct;

  for (const km of [2, 8, 25]) {
    const latDelta = km / 111;
    const lonDelta = km / (111 * Math.cos((lat * Math.PI) / 180));
    const nearby = await queryZcta({
      geometry: `${lon - lonDelta},${lat - latDelta},${lon + lonDelta},${lat + latDelta}`,
      geometryType: "esriGeometryEnvelope",
    });
    if (nearby) return nearby;
  }
  return null;
}

async function zipFromNominatim(lat: number, lon: number): Promise<string | null> {
  const url = new URL("https://nominatim.openstreetmap.org/reverse");
  url.searchParams.set("lat", String(lat));
  url.searchParams.set("lon", String(lon));
  url.searchParams.set("format", "json");
  url.searchParams.set("addressdetails", "1");

  const res = await fetch(url.toString(), {
    headers: {
      Accept: "application/json",
      "User-Agent": "Plantify/1.0 (garden planning app)",
    },
  });
  if (!res.ok) return null;

  const data = (await res.json()) as { address?: { postcode?: string } };
  const postcode = data.address?.postcode?.match(/\d{5}/)?.[0];
  return postcode ?? null;
}

export async function fetchGrowingZone(lat: number, lon: number): Promise<string> {
  const zip =
    (await zipFromTiger(lat, lon).catch(() => null)) ??
    (await zipFromNominatim(lat, lon).catch(() => null));
  if (!zip) throw new Error("Could not resolve a ZIP code for this location");

  const res = await fetch(`https://phzmapi.org/${zip}.json`, {
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new Error(`Hardiness zone lookup failed (${res.status})`);

  const data = (await res.json()) as { zone?: string };
  if (!data.zone) throw new Error("Hardiness zone lookup returned no zone");
  return data.zone;
}
