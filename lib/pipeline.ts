import { geocodeText } from "@/lib/geocode";
import { findBestCrops, zoneNumberForScore } from "@/lib/scoring";
import { fetchSoil } from "@/lib/soil";
import type { AnalyzeRequest, AnalyzeResult } from "@/lib/types";
import { wateringAdvice } from "@/lib/watering";
import { fetchGrowingZone } from "@/lib/zone";

const TIMEOUT_MS = 20000;

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => {
      timer = setTimeout(() => reject(new Error("Analysis timed out")), ms);
    }),
  ]).finally(() => {
    if (timer) clearTimeout(timer);
  });
}

/** Line SSURGO drainage wording up with the catalog labels the scorer expects. */
function drainageForScore(drainage: string): string {
  const value = drainage.toLowerCase();
  if (value.includes("excessive")) return "Excessive";
  if (value.includes("poor")) return "Poor";
  if (value.includes("moderate")) return "Moderate";
  if (value.includes("well")) return "Well-drained";
  return drainage;
}

async function livePipeline(req: AnalyzeRequest): Promise<AnalyzeResult> {
  let lat = req.lat;
  let lon = req.lon;
  let locationName = req.label?.trim() || "";

  if (lat == null || lon == null || !Number.isFinite(lat) || !Number.isFinite(lon)) {
    if (!req.query?.trim()) throw new Error("Missing location");
    const geo = await geocodeText(req.query);
    lat = geo.lat;
    lon = geo.lon;
    locationName = locationName || geo.label;
  }

  if (!locationName) locationName = `${lat!.toFixed(3)}, ${lon!.toFixed(3)}`;

  const [soil, growingZone] = await Promise.all([
    fetchSoil(lat!, lon!),
    fetchGrowingZone(lat!, lon!),
  ]);

  const pH = (soil.phLow + soil.phHigh) / 2;
  const drainage = drainageForScore(soil.drainage);
  const zoneNumber = zoneNumberForScore(growingZone);
  const best = findBestCrops(soil.texture, pH, drainage, zoneNumber, 10);

  console.log(
    `[plantify] crop ranking  texture=${soil.texture}  pH=${pH.toFixed(2)}  drainage=${drainage}  zone=${zoneNumber}\n${best
      .map(
        (crop, index) =>
          `${index + 1}. ${crop.commodityType}  ${(Math.round(crop.score * 1000) / 1000).toFixed(3)}`,
      )
      .join("\n")}`,
  );

  return {
    locationName,
    lat: lat!,
    lon: lon!,
    usdaZone: growingZone,
    soil,
    watering: wateringAdvice(soil),
    crops: best.map((crop) => ({
      name: crop.commodityType,
      score: Math.round(crop.score * 1000) / 1000,
      ph: crop.preferredPH,
      zones: crop.usdaZones.replace(/^zones\s+/i, "Zones "),
      soil: crop.soilType,
      drainage: crop.preferredSoilDrainage,
      reason: `pH ${crop.preferredPH} · ${crop.usdaZones} · ${crop.soilType} · ${crop.preferredSoilDrainage}`,
    })),
  };
}

export async function analyzeLocation(req: AnalyzeRequest): Promise<AnalyzeResult> {
  return withTimeout(livePipeline(req), TIMEOUT_MS);
}
