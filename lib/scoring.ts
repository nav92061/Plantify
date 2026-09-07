import { CROPS } from "@/data/crops";
import type {
  ClimateProfile,
  Crop,
  RankedCrop,
  SoilProfile,
} from "@/lib/types";

/** Score a single site value against a crop tolerance range (1 = ideal). */
function valueFit(value: number, min: number, max: number): number {
  if (value >= min && value <= max) {
    const mid = (min + max) / 2;
    const half = (max - min) / 2 || 1;
    return 1 - 0.15 * (Math.abs(value - mid) / half);
  }
  const dist = value < min ? min - value : value - max;
  const span = max - min || 1;
  return Math.max(0, 1 - dist / span);
}

/**
 * Score pH across the full SSURGO low–high span (not the midpoint).
 * Samples the interval and averages fitness so crops must tolerate the whole range.
 */
function phRangeFit(
  phLow: number,
  phHigh: number,
  cropMin: number,
  cropMax: number,
): number {
  const steps = 10;
  let total = 0;
  for (let i = 0; i <= steps; i++) {
    const ph = phLow + ((phHigh - phLow) * i) / steps;
    total += valueFit(ph, cropMin, cropMax);
  }
  return total / (steps + 1);
}

function buildReason(
  crop: Crop,
  climate: ClimateProfile,
  soil: SoilProfile,
  score: number,
): string {
  const seasonNote =
    crop.season === "warm"
      ? `Warm-season crop suits ${climate.growingSeasonDays}-day season`
      : `Cool-season crop fits frost window (${climate.avgLastFrost}–${climate.avgFirstFrost})`;

  if (score >= 0.85) {
    return `${seasonNote}; rainfall and pH (${soil.phLow.toFixed(1)}–${soil.phHigh.toFixed(1)}) sit comfortably in range.`;
  }
  if (score >= 0.65) {
    return `${seasonNote}; ${climate.meanAnnualRainfallMm} mm rain and ${soil.texture.toLowerCase()} soils are a solid match.`;
  }
  return `${seasonNote}; workable with attention to water and soil pH.`;
}

export function rankCrops(
  climate: ClimateProfile,
  soil: SoilProfile,
  limit = 8,
): RankedCrop[] {
  const ranked = CROPS.map((crop) => {
    const summerFit = valueFit(
      climate.meanSummerHighC,
      crop.minTempC,
      crop.maxTempC,
    );
    const winterFit = valueFit(
      climate.meanWinterLowC,
      crop.minTempC - 5,
      crop.maxTempC,
    );
    const rainFit = valueFit(
      climate.meanAnnualRainfallMm,
      crop.minRainfallMm,
      crop.maxRainfallMm,
    );
    const phFit = phRangeFit(soil.phLow, soil.phHigh, crop.minPh, crop.maxPh);

    const seasonFit =
      crop.season === "warm"
        ? climate.growingSeasonDays >= crop.daysToMaturity
          ? 1
          : climate.growingSeasonDays / crop.daysToMaturity
        : climate.growingSeasonDays >= 90
          ? 0.95
          : 0.75;

    const score =
      summerFit * 0.28 +
      winterFit * 0.12 +
      rainFit * 0.25 +
      phFit * 0.25 +
      seasonFit * 0.1;

    return {
      name: crop.name,
      score: Math.round(score * 1000) / 1000,
      reason: buildReason(crop, climate, soil, score),
    };
  });

  return ranked.sort((a, b) => b.score - a.score).slice(0, limit);
}
