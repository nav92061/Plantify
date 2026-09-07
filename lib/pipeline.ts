import { CACHED_CITIES } from "@/data/cached";
import { fetchClimate } from "@/lib/climate";
import { geocodeText } from "@/lib/geocode";
import { haversineKm } from "@/lib/haversine";
import { rankCrops } from "@/lib/scoring";
import { fetchSoil } from "@/lib/soil";
import type { AnalyzeRequest, AnalyzeResult } from "@/lib/types";

const TIMEOUT_MS = 4000;

function nearestCached(lat: number, lon: number): AnalyzeResult {
  let best = CACHED_CITIES[0];
  let bestDist = Infinity;
  for (const city of CACHED_CITIES) {
    const d = haversineKm(lat, lon, city.lat, city.lon);
    if (d < bestDist) {
      bestDist = d;
      best = city;
    }
  }
  return { ...best, fromCache: true };
}

async function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    return await Promise.race([
      promise,
      new Promise<T>((_, reject) => {
        timer = setTimeout(() => reject(new Error("timeout")), ms);
      }),
    ]);
  } finally {
    if (timer) clearTimeout(timer);
  }
}

async function livePipeline(req: AnalyzeRequest): Promise<AnalyzeResult> {
  let lat = req.lat;
  let lon = req.lon;
  let locationName = req.label?.trim() || "";

  if (lat == null || lon == null || !Number.isFinite(lat) || !Number.isFinite(lon)) {
    if (!req.query?.trim()) {
      throw new Error("Missing location");
    }
    const geo = await geocodeText(req.query);
    lat = geo.lat;
    lon = geo.lon;
    locationName = locationName || geo.label;
  }

  if (!locationName) {
    locationName = `${lat!.toFixed(3)}, ${lon!.toFixed(3)}`;
  }

  const [climate, soil] = await Promise.all([
    fetchClimate(lat!, lon!),
    fetchSoil(lat!, lon!),
  ]);

  const crops = rankCrops(climate, soil, 8);

  return {
    locationName,
    lat: lat!,
    lon: lon!,
    soil,
    climate,
    crops,
    fromCache: false,
  };
}

/**
 * Run the full live pipeline with a hard 4s ceiling.
 * On any failure or timeout, return the nearest cached city silently.
 */
export async function analyzeLocation(
  req: AnalyzeRequest,
): Promise<AnalyzeResult> {
  const fallbackLat = req.lat ?? 33.749;
  const fallbackLon = req.lon ?? -84.388;

  try {
    return await withTimeout(livePipeline(req), TIMEOUT_MS);
  } catch {
    // If we only have a text query, try a quick geocode for nearest-cache,
    // but never exceed the overall UX budget — fall back to Atlanta-ish.
    if (
      (req.lat == null || req.lon == null) &&
      req.query?.trim()
    ) {
      try {
        const geo = await withTimeout(geocodeText(req.query), 1500);
        return nearestCached(geo.lat, geo.lon);
      } catch {
        return nearestCached(fallbackLat, fallbackLon);
      }
    }
    return nearestCached(fallbackLat, fallbackLon);
  }
}
