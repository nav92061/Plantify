export type GeocodedLocation = {
  lat: number;
  lon: number;
  label: string;
};

async function geocodeCensus(address: string): Promise<GeocodedLocation | null> {
  const url = new URL(
    "https://geocoding.geo.census.gov/geocoder/locations/onelineaddress",
  );
  url.searchParams.set("address", address);
  url.searchParams.set("benchmark", "Public_AR_Current");
  url.searchParams.set("format", "json");

  const res = await fetch(url.toString(), {
    headers: { Accept: "application/json" },
    next: { revalidate: 0 },
  });
  if (!res.ok) return null;

  const data = (await res.json()) as {
    result?: {
      addressMatches?: Array<{
        matchedAddress?: string;
        coordinates?: { x: number; y: number };
      }>;
    };
  };

  const match = data.result?.addressMatches?.[0];
  if (!match?.coordinates) return null;

  return {
    lat: match.coordinates.y,
    lon: match.coordinates.x,
    label: match.matchedAddress ?? address,
  };
}

async function geocodeNominatim(query: string): Promise<GeocodedLocation | null> {
  const url = new URL("https://nominatim.openstreetmap.org/search");
  url.searchParams.set("q", query);
  url.searchParams.set("format", "json");
  url.searchParams.set("countrycodes", "us");
  url.searchParams.set("limit", "1");

  const res = await fetch(url.toString(), {
    headers: {
      Accept: "application/json",
      "User-Agent": "Plantify/1.0 (garden planning app)",
    },
    next: { revalidate: 0 },
  });
  if (!res.ok) return null;

  const data = (await res.json()) as Array<{
    lat: string;
    lon: string;
    display_name?: string;
  }>;

  const hit = data[0];
  if (!hit) return null;

  return {
    lat: Number(hit.lat),
    lon: Number(hit.lon),
    label: hit.display_name ?? query,
  };
}

/** Census for street addresses; Nominatim fallback for city / ZIP. */
export async function geocodeText(query: string): Promise<GeocodedLocation> {
  const trimmed = query.trim();
  if (!trimmed) {
    throw new Error("Empty location query");
  }

  const census = await geocodeCensus(trimmed).catch(() => null);
  if (census) return census;

  const nominatim = await geocodeNominatim(trimmed).catch(() => null);
  if (nominatim) return nominatim;

  throw new Error("Geocoding failed");
}
