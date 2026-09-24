import { loadCrops, type CatalogCrop } from "@/lib/crop-catalog";

export type ScoredCrop = CatalogCrop & {
  score: number;
};

function parsePHRange(phString: string): { lower: number; upper: number } | null {
  const cleaned = phString.replace(/ /g, "");
  const components = cleaned
    .split(/[–-]/)
    .map((part) => part.trim())
    .map((part) => Number(part))
    .filter((n) => Number.isFinite(n));

  if (components.length !== 2) return null;
  return { lower: components[0], upper: components[1] };
}

function extractZoneNumber(zoneString: string): number | null {
  const trimmed = zoneString.replace(/^\D+/, "").replace(/\D+$/, "");
  if (!/^\d+$/.test(trimmed)) return null;
  return Number(trimmed);
}

function parseZoneRange(zoneString: string): { lower: number; upper: number } | null {
  const cleaned = zoneString
    .replace(/Zones/g, "")
    .replace(/ /g, "")
    .replace(/zones/g, "");
  const components = cleaned
    .split(/[–-]/)
    .map((part) => extractZoneNumber(part))
    .filter((n): n is number => n != null);

  if (components.length !== 2) return null;
  return { lower: components[0], upper: components[1] };
}

function calculatePHDistance(cropPH: string, targetPH: number): number {
  const phRange = parsePHRange(cropPH);
  if (!phRange) return 0;

  if (targetPH >= phRange.lower && targetPH <= phRange.upper) return 1;

  if (targetPH < phRange.lower) {
    const distance = phRange.lower - targetPH;
    return Math.max(0, 1 - distance * 0.5);
  }

  const distance = targetPH - phRange.upper;
  return Math.max(0, 1 - distance * 0.5);
}

function calculateZoneDistance(cropZones: string, targetZone: string): number {
  const targetZoneNum = extractZoneNumber(targetZone);
  if (targetZoneNum == null) return 0;

  const zoneRange = parseZoneRange(cropZones);
  if (zoneRange) {
    if (targetZoneNum >= zoneRange.lower && targetZoneNum <= zoneRange.upper) {
      return 1;
    }
    if (targetZoneNum < zoneRange.lower) {
      const distance = zoneRange.lower - targetZoneNum;
      return Math.max(0, 1 - distance * 0.2);
    }
    const distance = targetZoneNum - zoneRange.upper;
    return Math.max(0, 1 - distance * 0.2);
  }

  if (cropZones.toLowerCase().includes(targetZone.toLowerCase())) return 0.8;
  return 0;
}

function normalizeSoilName(soil: string): string {
  const normalized = soil.trim();
  if (normalized.includes("sand")) return "sand";
  if (normalized.includes("clay")) return "clay";
  if (normalized.includes("silt")) return "silt";
  if (normalized.includes("loam")) return "loam";
  return normalized;
}

function extractSoilComponents(soil: string): string[] {
  return soil
    .replace(/&/g, "and")
    .split("and")
    .map((part) => part.trim())
    .filter((part) => part.length > 0);
}

function sameComponents(left: string[], right: string[]): boolean {
  if (left.length !== right.length) return false;
  return left.every((value, index) => value === right[index]);
}

function calculateSoilSimilarity(cropSoil: string, targetSoil: string): number {
  const cropSoilComponents = extractSoilComponents(cropSoil.toLowerCase().trim());
  const targetSoilComponents = extractSoilComponents(targetSoil.toLowerCase().trim());
  const normalizedCrop = cropSoilComponents.map(normalizeSoilName);
  const normalizedTarget = targetSoilComponents.map(normalizeSoilName);

  if (sameComponents(normalizedCrop, normalizedTarget)) return 1;

  const cropSet = new Set(normalizedCrop);
  const overlap = normalizedTarget.some((part) => cropSet.has(part));
  if (overlap) return 0.9;
  return 0.1;
}

function calculateDrainageSimilarity(cropDrainage: string, targetDrainage: string): number {
  const cropDrainageLower = cropDrainage.toLowerCase();
  const targetDrainageLower = targetDrainage.toLowerCase();

  if (cropDrainageLower === targetDrainageLower) return 1;
  if (
    cropDrainageLower.includes(targetDrainageLower) ||
    targetDrainageLower.includes(cropDrainageLower)
  ) {
    return 0.8;
  }

  const drainageTypes: Record<string, number> = {
    "well-drained": 1,
    moderate: 0.7,
    poor: 0.3,
  };
  const keys = ["well-drained", "moderate", "poor"];
  const cropKey = keys.find((key) => cropDrainageLower.includes(key));
  const targetKey = keys.find((key) => targetDrainageLower.includes(key));
  if (cropKey && targetKey) {
    return Math.min(drainageTypes[cropKey], drainageTypes[targetKey]);
  }
  return 0.5;
}

function calculateFuzzyMatchScore(
  crop: CatalogCrop,
  soilType: string,
  pH: number,
  drainage: string,
  usdaZone: string,
): number {
  const phScore = calculatePHDistance(crop.preferredPH, pH);
  const zoneScore = calculateZoneDistance(crop.usdaZones, usdaZone);
  const soilScore = calculateSoilSimilarity(crop.soilType, soilType);
  const drainageScore = calculateDrainageSimilarity(crop.preferredSoilDrainage, drainage);

  // Same relative weights as the iOS ranker, with revenue removed.
  return (phScore * 0.35 + zoneScore * 0.25 + soilScore * 0.2 + drainageScore * 0.1) / 0.9;
}

export function findBestCrops(
  soilType: string,
  pH: number,
  drainage: string,
  usdaZone: string,
  limit = 20,
): ScoredCrop[] {
  const crops = loadCrops();
  const scored = crops.map((crop) => ({
    crop,
    matchScore: calculateFuzzyMatchScore(crop, soilType, pH, drainage, usdaZone),
  }));

  scored.sort((a, b) => b.matchScore - a.matchScore);

  return scored.slice(0, limit).map(({ crop, matchScore }) => ({
    ...crop,
    score: matchScore,
  }));
}

export function zoneNumberForScore(growingZone: string): string {
  return growingZone.split(/[^0-9]+/).join("");
}
