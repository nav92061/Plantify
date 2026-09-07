/**
 * Generates data/cached.ts with 60 pre-computed city results.
 * Run: npx tsx scripts/generate-cached.ts
 */
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { CROPS } from "../data/crops";
import type { ClimateProfile, RankedCrop, SoilProfile } from "../lib/types";

type Seed = {
  locationName: string;
  lat: number;
  lon: number;
  soil: SoilProfile;
  climate: ClimateProfile;
};

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

function phRangeFit(phLow: number, phHigh: number, cropMin: number, cropMax: number): number {
  const steps = 10;
  let total = 0;
  for (let i = 0; i <= steps; i++) {
    const ph = phLow + ((phHigh - phLow) * i) / steps;
    total += valueFit(ph, cropMin, cropMax);
  }
  return total / (steps + 1);
}

function rankCrops(climate: ClimateProfile, soil: SoilProfile): RankedCrop[] {
  return CROPS.map((crop) => {
    const summerFit = valueFit(climate.meanSummerHighC, crop.minTempC, crop.maxTempC);
    const winterFit = valueFit(climate.meanWinterLowC, crop.minTempC - 5, crop.maxTempC);
    const rainFit = valueFit(climate.meanAnnualRainfallMm, crop.minRainfallMm, crop.maxRainfallMm);
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
      summerFit * 0.28 + winterFit * 0.12 + rainFit * 0.25 + phFit * 0.25 + seasonFit * 0.1;
    const seasonNote =
      crop.season === "warm"
        ? `Warm-season crop suits ${climate.growingSeasonDays}-day season`
        : `Cool-season crop fits frost window (${climate.avgLastFrost}–${climate.avgFirstFrost})`;
    const reason =
      score >= 0.85
        ? `${seasonNote}; rainfall and pH (${soil.phLow.toFixed(1)}–${soil.phHigh.toFixed(1)}) sit comfortably in range.`
        : score >= 0.65
          ? `${seasonNote}; ${climate.meanAnnualRainfallMm} mm rain and ${soil.texture.toLowerCase()} soils are a solid match.`
          : `${seasonNote}; workable with attention to water and soil pH.`;
    return { name: crop.name, score: Math.round(score * 1000) / 1000, reason };
  })
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
}

const SEEDS: Seed[] = [
  // Metro Atlanta weighted
  { locationName: "Atlanta, GA", lat: 33.749, lon: -84.388, soil: { mapUnitName: "Cecil sandy loam", componentName: "Cecil", texture: "Sandy loam", drainage: "Well drained", phLow: 5.1, phHigh: 6.0 }, climate: { meanAnnualRainfallMm: 1260, meanSummerHighC: 31.5, meanWinterLowC: 1.2, avgFirstFrost: "Nov 12", avgLastFrost: "Mar 22", growingSeasonDays: 235 } },
  { locationName: "Decatur, GA", lat: 33.7748, lon: -84.2963, soil: { mapUnitName: "Pacolet sandy loam", componentName: "Pacolet", texture: "Sandy loam", drainage: "Well drained", phLow: 5.0, phHigh: 5.8 }, climate: { meanAnnualRainfallMm: 1255, meanSummerHighC: 31.4, meanWinterLowC: 1.3, avgFirstFrost: "Nov 13", avgLastFrost: "Mar 21", growingSeasonDays: 237 } },
  { locationName: "Marietta, GA", lat: 33.9526, lon: -84.5499, soil: { mapUnitName: "Madison sandy clay loam", componentName: "Madison", texture: "Sandy clay loam", drainage: "Well drained", phLow: 5.2, phHigh: 6.1 }, climate: { meanAnnualRainfallMm: 1320, meanSummerHighC: 30.8, meanWinterLowC: 0.5, avgFirstFrost: "Nov 8", avgLastFrost: "Mar 28", growingSeasonDays: 225 } },
  { locationName: "Alpharetta, GA", lat: 34.0754, lon: -84.2941, soil: { mapUnitName: "Cecil-Urban land complex", componentName: "Cecil", texture: "Sandy loam", drainage: "Well drained", phLow: 5.3, phHigh: 6.2 }, climate: { meanAnnualRainfallMm: 1335, meanSummerHighC: 30.6, meanWinterLowC: 0.2, avgFirstFrost: "Nov 6", avgLastFrost: "Mar 30", growingSeasonDays: 221 } },
  { locationName: "Roswell, GA", lat: 34.0232, lon: -84.3616, soil: { mapUnitName: "Pacolet clay loam", componentName: "Pacolet", texture: "Clay loam", drainage: "Well drained", phLow: 5.1, phHigh: 5.9 }, climate: { meanAnnualRainfallMm: 1328, meanSummerHighC: 30.7, meanWinterLowC: 0.3, avgFirstFrost: "Nov 7", avgLastFrost: "Mar 29", growingSeasonDays: 223 } },
  { locationName: "Sandy Springs, GA", lat: 33.9304, lon: -84.3733, soil: { mapUnitName: "Cecil sandy loam", componentName: "Cecil", texture: "Sandy loam", drainage: "Well drained", phLow: 5.2, phHigh: 6.0 }, climate: { meanAnnualRainfallMm: 1285, meanSummerHighC: 31.1, meanWinterLowC: 0.8, avgFirstFrost: "Nov 10", avgLastFrost: "Mar 25", growingSeasonDays: 230 } },
  { locationName: "Brookhaven, GA", lat: 33.8651, lon: -84.3366, soil: { mapUnitName: "Urban land-Cecil complex", componentName: "Cecil", texture: "Loam", drainage: "Well drained", phLow: 5.4, phHigh: 6.3 }, climate: { meanAnnualRainfallMm: 1270, meanSummerHighC: 31.2, meanWinterLowC: 1.0, avgFirstFrost: "Nov 11", avgLastFrost: "Mar 24", growingSeasonDays: 232 } },
  { locationName: "Smyrna, GA", lat: 33.8839, lon: -84.5144, soil: { mapUnitName: "Madison sandy loam", componentName: "Madison", texture: "Sandy loam", drainage: "Well drained", phLow: 5.2, phHigh: 6.0 }, climate: { meanAnnualRainfallMm: 1295, meanSummerHighC: 31.0, meanWinterLowC: 0.6, avgFirstFrost: "Nov 9", avgLastFrost: "Mar 26", growingSeasonDays: 228 } },
  { locationName: "Dunwoody, GA", lat: 33.9462, lon: -84.3346, soil: { mapUnitName: "Cecil sandy clay loam", componentName: "Cecil", texture: "Sandy clay loam", drainage: "Well drained", phLow: 5.1, phHigh: 5.9 }, climate: { meanAnnualRainfallMm: 1290, meanSummerHighC: 30.9, meanWinterLowC: 0.7, avgFirstFrost: "Nov 9", avgLastFrost: "Mar 26", growingSeasonDays: 228 } },
  { locationName: "Johns Creek, GA", lat: 34.0289, lon: -84.1986, soil: { mapUnitName: "Pacolet sandy loam", componentName: "Pacolet", texture: "Sandy loam", drainage: "Well drained", phLow: 5.0, phHigh: 5.8 }, climate: { meanAnnualRainfallMm: 1340, meanSummerHighC: 30.5, meanWinterLowC: 0.1, avgFirstFrost: "Nov 5", avgLastFrost: "Mar 31", growingSeasonDays: 219 } },
  { locationName: "Lawrenceville, GA", lat: 33.9562, lon: -83.9881, soil: { mapUnitName: "Cecil sandy loam", componentName: "Cecil", texture: "Sandy loam", drainage: "Well drained", phLow: 5.1, phHigh: 6.0 }, climate: { meanAnnualRainfallMm: 1305, meanSummerHighC: 30.9, meanWinterLowC: 0.4, avgFirstFrost: "Nov 8", avgLastFrost: "Mar 28", growingSeasonDays: 225 } },
  { locationName: "Athens, GA", lat: 33.9519, lon: -83.3577, soil: { mapUnitName: "Cecil-Madison complex", componentName: "Cecil", texture: "Sandy clay loam", drainage: "Well drained", phLow: 5.2, phHigh: 6.1 }, climate: { meanAnnualRainfallMm: 1215, meanSummerHighC: 31.8, meanWinterLowC: 1.5, avgFirstFrost: "Nov 10", avgLastFrost: "Mar 20", growingSeasonDays: 235 } },
  { locationName: "Gainesville, GA", lat: 34.2979, lon: -83.8241, soil: { mapUnitName: "Hiwassee clay loam", componentName: "Hiwassee", texture: "Clay loam", drainage: "Well drained", phLow: 5.3, phHigh: 6.2 }, climate: { meanAnnualRainfallMm: 1380, meanSummerHighC: 30.0, meanWinterLowC: -0.5, avgFirstFrost: "Nov 2", avgLastFrost: "Apr 5", growingSeasonDays: 211 } },
  { locationName: "Rome, GA", lat: 34.257, lon: -85.1647, soil: { mapUnitName: "Conasauga silt loam", componentName: "Conasauga", texture: "Silt loam", drainage: "Moderately well drained", phLow: 5.5, phHigh: 6.5 }, climate: { meanAnnualRainfallMm: 1350, meanSummerHighC: 31.2, meanWinterLowC: 0.0, avgFirstFrost: "Nov 5", avgLastFrost: "Apr 1", growingSeasonDays: 218 } },
  { locationName: "Macon, GA", lat: 32.8407, lon: -83.6324, soil: { mapUnitName: "Tifton loamy sand", componentName: "Tifton", texture: "Loamy sand", drainage: "Well drained", phLow: 5.0, phHigh: 5.8 }, climate: { meanAnnualRainfallMm: 1165, meanSummerHighC: 33.0, meanWinterLowC: 2.8, avgFirstFrost: "Nov 18", avgLastFrost: "Mar 10", growingSeasonDays: 253 } },
  { locationName: "Augusta, GA", lat: 33.4735, lon: -82.0105, soil: { mapUnitName: "Lakeland sand", componentName: "Lakeland", texture: "Sand", drainage: "Excessively drained", phLow: 4.8, phHigh: 5.6 }, climate: { meanAnnualRainfallMm: 1130, meanSummerHighC: 33.2, meanWinterLowC: 2.5, avgFirstFrost: "Nov 16", avgLastFrost: "Mar 12", growingSeasonDays: 249 } },
  { locationName: "Savannah, GA", lat: 32.0809, lon: -81.0912, soil: { mapUnitName: "Ocilla loamy sand", componentName: "Ocilla", texture: "Loamy sand", drainage: "Somewhat poorly drained", phLow: 5.0, phHigh: 5.8 }, climate: { meanAnnualRainfallMm: 1245, meanSummerHighC: 32.5, meanWinterLowC: 5.0, avgFirstFrost: "Dec 5", avgLastFrost: "Feb 20", growingSeasonDays: 288 } },
  { locationName: "Columbus, GA", lat: 32.461, lon: -84.9877, soil: { mapUnitName: "Faceville sandy loam", componentName: "Faceville", texture: "Sandy loam", drainage: "Well drained", phLow: 5.1, phHigh: 6.0 }, climate: { meanAnnualRainfallMm: 1220, meanSummerHighC: 33.1, meanWinterLowC: 3.0, avgFirstFrost: "Nov 20", avgLastFrost: "Mar 8", growingSeasonDays: 257 } },
  { locationName: "Albany, GA", lat: 31.5785, lon: -84.1557, soil: { mapUnitName: "Tifton loamy sand", componentName: "Tifton", texture: "Loamy sand", drainage: "Well drained", phLow: 5.0, phHigh: 5.7 }, climate: { meanAnnualRainfallMm: 1285, meanSummerHighC: 33.5, meanWinterLowC: 4.2, avgFirstFrost: "Nov 25", avgLastFrost: "Mar 1", growingSeasonDays: 269 } },
  { locationName: "Valdosta, GA", lat: 30.8327, lon: -83.2785, soil: { mapUnitName: "Fuquay loamy sand", componentName: "Fuquay", texture: "Loamy sand", drainage: "Well drained", phLow: 4.9, phHigh: 5.6 }, climate: { meanAnnualRainfallMm: 1320, meanSummerHighC: 33.2, meanWinterLowC: 5.5, avgFirstFrost: "Dec 1", avgLastFrost: "Feb 22", growingSeasonDays: 282 } },
  { locationName: "Peachtree City, GA", lat: 33.3968, lon: -84.5957, soil: { mapUnitName: "Cecil sandy loam", componentName: "Cecil", texture: "Sandy loam", drainage: "Well drained", phLow: 5.2, phHigh: 6.0 }, climate: { meanAnnualRainfallMm: 1275, meanSummerHighC: 31.6, meanWinterLowC: 1.0, avgFirstFrost: "Nov 11", avgLastFrost: "Mar 23", growingSeasonDays: 233 } },
  { locationName: "Kennesaw, GA", lat: 34.0234, lon: -84.6155, soil: { mapUnitName: "Madison clay loam", componentName: "Madison", texture: "Clay loam", drainage: "Well drained", phLow: 5.2, phHigh: 6.1 }, climate: { meanAnnualRainfallMm: 1330, meanSummerHighC: 30.7, meanWinterLowC: 0.2, avgFirstFrost: "Nov 6", avgLastFrost: "Mar 29", growingSeasonDays: 222 } },
  { locationName: "Newnan, GA", lat: 33.3807, lon: -84.7997, soil: { mapUnitName: "Cecil sandy clay loam", componentName: "Cecil", texture: "Sandy clay loam", drainage: "Well drained", phLow: 5.1, phHigh: 5.9 }, climate: { meanAnnualRainfallMm: 1280, meanSummerHighC: 31.8, meanWinterLowC: 1.1, avgFirstFrost: "Nov 12", avgLastFrost: "Mar 22", growingSeasonDays: 235 } },
  { locationName: "Carrollton, GA", lat: 33.5801, lon: -85.0766, soil: { mapUnitName: "Pacolet sandy loam", componentName: "Pacolet", texture: "Sandy loam", drainage: "Well drained", phLow: 5.0, phHigh: 5.8 }, climate: { meanAnnualRainfallMm: 1360, meanSummerHighC: 31.0, meanWinterLowC: 0.3, avgFirstFrost: "Nov 7", avgLastFrost: "Mar 27", growingSeasonDays: 225 } },
  { locationName: "Duluth, GA", lat: 34.0029, lon: -84.1446, soil: { mapUnitName: "Cecil-Urban land complex", componentName: "Cecil", texture: "Sandy loam", drainage: "Well drained", phLow: 5.3, phHigh: 6.2 }, climate: { meanAnnualRainfallMm: 1310, meanSummerHighC: 30.8, meanWinterLowC: 0.5, avgFirstFrost: "Nov 8", avgLastFrost: "Mar 27", growingSeasonDays: 226 } },
  // Southeast / nearby
  { locationName: "Birmingham, AL", lat: 33.5207, lon: -86.8025, soil: { mapUnitName: "Nauvoo fine sandy loam", componentName: "Nauvoo", texture: "Fine sandy loam", drainage: "Well drained", phLow: 5.0, phHigh: 5.8 }, climate: { meanAnnualRainfallMm: 1385, meanSummerHighC: 32.0, meanWinterLowC: 1.0, avgFirstFrost: "Nov 10", avgLastFrost: "Mar 25", growingSeasonDays: 230 } },
  { locationName: "Huntsville, AL", lat: 34.7304, lon: -86.5861, soil: { mapUnitName: "Decatur silt loam", componentName: "Decatur", texture: "Silt loam", drainage: "Well drained", phLow: 5.5, phHigh: 6.5 }, climate: { meanAnnualRainfallMm: 1395, meanSummerHighC: 31.5, meanWinterLowC: -0.5, avgFirstFrost: "Nov 3", avgLastFrost: "Apr 2", growingSeasonDays: 215 } },
  { locationName: "Chattanooga, TN", lat: 35.0456, lon: -85.3097, soil: { mapUnitName: "Fullerton cherty silt loam", componentName: "Fullerton", texture: "Silt loam", drainage: "Well drained", phLow: 5.2, phHigh: 6.0 }, climate: { meanAnnualRainfallMm: 1355, meanSummerHighC: 31.8, meanWinterLowC: -0.2, avgFirstFrost: "Nov 4", avgLastFrost: "Apr 3", growingSeasonDays: 215 } },
  { locationName: "Knoxville, TN", lat: 35.9606, lon: -83.9207, soil: { mapUnitName: "Sequoia silt loam", componentName: "Sequoia", texture: "Silt loam", drainage: "Well drained", phLow: 5.3, phHigh: 6.2 }, climate: { meanAnnualRainfallMm: 1220, meanSummerHighC: 30.8, meanWinterLowC: -1.0, avgFirstFrost: "Oct 30", avgLastFrost: "Apr 8", growingSeasonDays: 205 } },
  { locationName: "Nashville, TN", lat: 36.1627, lon: -86.7816, soil: { mapUnitName: "Maury silt loam", componentName: "Maury", texture: "Silt loam", drainage: "Well drained", phLow: 5.8, phHigh: 6.8 }, climate: { meanAnnualRainfallMm: 1205, meanSummerHighC: 31.5, meanWinterLowC: -0.8, avgFirstFrost: "Nov 1", avgLastFrost: "Apr 5", growingSeasonDays: 210 } },
  { locationName: "Asheville, NC", lat: 35.5951, lon: -82.5515, soil: { mapUnitName: "Evard-Cowee complex", componentName: "Evard", texture: "Loam", drainage: "Well drained", phLow: 5.0, phHigh: 5.8 }, climate: { meanAnnualRainfallMm: 1190, meanSummerHighC: 28.0, meanWinterLowC: -2.5, avgFirstFrost: "Oct 20", avgLastFrost: "Apr 20", growingSeasonDays: 183 } },
  { locationName: "Charlotte, NC", lat: 35.2271, lon: -80.8431, soil: { mapUnitName: "Cecil sandy clay loam", componentName: "Cecil", texture: "Sandy clay loam", drainage: "Well drained", phLow: 5.2, phHigh: 6.0 }, climate: { meanAnnualRainfallMm: 1105, meanSummerHighC: 31.5, meanWinterLowC: 0.5, avgFirstFrost: "Nov 8", avgLastFrost: "Mar 28", growingSeasonDays: 225 } },
  { locationName: "Raleigh, NC", lat: 35.7796, lon: -78.6382, soil: { mapUnitName: "Appling sandy loam", componentName: "Appling", texture: "Sandy loam", drainage: "Well drained", phLow: 5.1, phHigh: 5.9 }, climate: { meanAnnualRainfallMm: 1160, meanSummerHighC: 31.8, meanWinterLowC: 0.8, avgFirstFrost: "Nov 10", avgLastFrost: "Mar 25", growingSeasonDays: 230 } },
  { locationName: "Charleston, SC", lat: 32.7765, lon: -79.9311, soil: { mapUnitName: "Yonges loamy fine sand", componentName: "Yonges", texture: "Loamy fine sand", drainage: "Poorly drained", phLow: 5.0, phHigh: 6.0 }, climate: { meanAnnualRainfallMm: 1295, meanSummerHighC: 32.0, meanWinterLowC: 5.5, avgFirstFrost: "Dec 8", avgLastFrost: "Feb 18", growingSeasonDays: 293 } },
  { locationName: "Greenville, SC", lat: 34.8526, lon: -82.394, soil: { mapUnitName: "Cecil sandy clay loam", componentName: "Cecil", texture: "Sandy clay loam", drainage: "Well drained", phLow: 5.2, phHigh: 6.0 }, climate: { meanAnnualRainfallMm: 1265, meanSummerHighC: 31.2, meanWinterLowC: 0.5, avgFirstFrost: "Nov 6", avgLastFrost: "Mar 30", growingSeasonDays: 221 } },
  { locationName: "Jacksonville, FL", lat: 30.3322, lon: -81.6557, soil: { mapUnitName: "Leon fine sand", componentName: "Leon", texture: "Fine sand", drainage: "Poorly drained", phLow: 4.5, phHigh: 5.5 }, climate: { meanAnnualRainfallMm: 1325, meanSummerHighC: 32.5, meanWinterLowC: 7.0, avgFirstFrost: "Dec 20", avgLastFrost: "Feb 5", growingSeasonDays: 318 } },
  { locationName: "Tampa, FL", lat: 27.9506, lon: -82.4572, soil: { mapUnitName: "Myakka fine sand", componentName: "Myakka", texture: "Fine sand", drainage: "Poorly drained", phLow: 4.8, phHigh: 5.8 }, climate: { meanAnnualRainfallMm: 1180, meanSummerHighC: 32.8, meanWinterLowC: 11.0, avgFirstFrost: "Jan 15", avgLastFrost: "Jan 20", growingSeasonDays: 350 } },
  { locationName: "Orlando, FL", lat: 28.5383, lon: -81.3792, soil: { mapUnitName: "Tavares fine sand", componentName: "Tavares", texture: "Fine sand", drainage: "Moderately well drained", phLow: 5.0, phHigh: 6.0 }, climate: { meanAnnualRainfallMm: 1305, meanSummerHighC: 33.0, meanWinterLowC: 10.0, avgFirstFrost: "Jan 5", avgLastFrost: "Jan 25", growingSeasonDays: 345 } },
  { locationName: "Miami, FL", lat: 25.7617, lon: -80.1918, soil: { mapUnitName: "Perrine marl", componentName: "Perrine", texture: "Marl", drainage: "Poorly drained", phLow: 7.2, phHigh: 8.0 }, climate: { meanAnnualRainfallMm: 1570, meanSummerHighC: 32.5, meanWinterLowC: 16.5, avgFirstFrost: "—", avgLastFrost: "—", growingSeasonDays: 365 } },
  { locationName: "New Orleans, LA", lat: 29.9511, lon: -90.0715, soil: { mapUnitName: "Sharkey clay", componentName: "Sharkey", texture: "Clay", drainage: "Poorly drained", phLow: 6.0, phHigh: 7.2 }, climate: { meanAnnualRainfallMm: 1590, meanSummerHighC: 32.5, meanWinterLowC: 7.5, avgFirstFrost: "Dec 15", avgLastFrost: "Feb 10", growingSeasonDays: 308 } },
  // Broader US metros
  { locationName: "New York, NY", lat: 40.7128, lon: -74.006, soil: { mapUnitName: "Urban land-Flatbush complex", componentName: "Flatbush", texture: "Sandy loam", drainage: "Well drained", phLow: 5.8, phHigh: 6.8 }, climate: { meanAnnualRainfallMm: 1200, meanSummerHighC: 28.5, meanWinterLowC: -2.5, avgFirstFrost: "Nov 5", avgLastFrost: "Apr 10", growingSeasonDays: 209 } },
  { locationName: "Boston, MA", lat: 42.3601, lon: -71.0589, soil: { mapUnitName: "Newport silt loam", componentName: "Newport", texture: "Silt loam", drainage: "Well drained", phLow: 5.5, phHigh: 6.5 }, climate: { meanAnnualRainfallMm: 1110, meanSummerHighC: 27.0, meanWinterLowC: -5.0, avgFirstFrost: "Oct 25", avgLastFrost: "Apr 20", growingSeasonDays: 188 } },
  { locationName: "Philadelphia, PA", lat: 39.9526, lon: -75.1652, soil: { mapUnitName: "Urban land-Chester complex", componentName: "Chester", texture: "Silt loam", drainage: "Well drained", phLow: 5.6, phHigh: 6.6 }, climate: { meanAnnualRainfallMm: 1055, meanSummerHighC: 29.5, meanWinterLowC: -2.0, avgFirstFrost: "Nov 2", avgLastFrost: "Apr 8", growingSeasonDays: 208 } },
  { locationName: "Washington, DC", lat: 38.9072, lon: -77.0369, soil: { mapUnitName: "Urban land-Christiana complex", componentName: "Christiana", texture: "Silt loam", drainage: "Moderately well drained", phLow: 5.5, phHigh: 6.5 }, climate: { meanAnnualRainfallMm: 1040, meanSummerHighC: 30.5, meanWinterLowC: -0.5, avgFirstFrost: "Nov 5", avgLastFrost: "Apr 5", growingSeasonDays: 214 } },
  { locationName: "Baltimore, MD", lat: 39.2904, lon: -76.6122, soil: { mapUnitName: "Joppa gravelly sandy loam", componentName: "Joppa", texture: "Gravelly sandy loam", drainage: "Well drained", phLow: 5.4, phHigh: 6.4 }, climate: { meanAnnualRainfallMm: 1065, meanSummerHighC: 30.0, meanWinterLowC: -1.0, avgFirstFrost: "Nov 3", avgLastFrost: "Apr 7", growingSeasonDays: 210 } },
  { locationName: "Richmond, VA", lat: 37.5407, lon: -77.436, soil: { mapUnitName: "Cecil fine sandy loam", componentName: "Cecil", texture: "Fine sandy loam", drainage: "Well drained", phLow: 5.2, phHigh: 6.0 }, climate: { meanAnnualRainfallMm: 1115, meanSummerHighC: 31.0, meanWinterLowC: -0.2, avgFirstFrost: "Nov 6", avgLastFrost: "Apr 2", growingSeasonDays: 218 } },
  { locationName: "Chicago, IL", lat: 41.8781, lon: -87.6298, soil: { mapUnitName: "Urban land-Orthents complex", componentName: "Orthents", texture: "Clay loam", drainage: "Somewhat poorly drained", phLow: 6.2, phHigh: 7.2 }, climate: { meanAnnualRainfallMm: 935, meanSummerHighC: 28.5, meanWinterLowC: -7.5, avgFirstFrost: "Oct 20", avgLastFrost: "Apr 25", growingSeasonDays: 178 } },
  { locationName: "Detroit, MI", lat: 42.3314, lon: -83.0458, soil: { mapUnitName: "Urban land-Spinks complex", componentName: "Spinks", texture: "Loamy sand", drainage: "Well drained", phLow: 5.8, phHigh: 6.8 }, climate: { meanAnnualRainfallMm: 845, meanSummerHighC: 28.0, meanWinterLowC: -6.5, avgFirstFrost: "Oct 18", avgLastFrost: "Apr 28", growingSeasonDays: 173 } },
  { locationName: "Columbus, OH", lat: 39.9612, lon: -82.9988, soil: { mapUnitName: "Crosby silt loam", componentName: "Crosby", texture: "Silt loam", drainage: "Somewhat poorly drained", phLow: 6.0, phHigh: 7.0 }, climate: { meanAnnualRainfallMm: 1005, meanSummerHighC: 29.0, meanWinterLowC: -5.0, avgFirstFrost: "Oct 22", avgLastFrost: "Apr 20", growingSeasonDays: 185 } },
  { locationName: "Indianapolis, IN", lat: 39.7684, lon: -86.1581, soil: { mapUnitName: "Miami silt loam", componentName: "Miami", texture: "Silt loam", drainage: "Moderately well drained", phLow: 6.0, phHigh: 7.0 }, climate: { meanAnnualRainfallMm: 1065, meanSummerHighC: 29.5, meanWinterLowC: -5.5, avgFirstFrost: "Oct 20", avgLastFrost: "Apr 18", growingSeasonDays: 185 } },
  { locationName: "Louisville, KY", lat: 38.2527, lon: -85.7585, soil: { mapUnitName: "Crider silt loam", componentName: "Crider", texture: "Silt loam", drainage: "Well drained", phLow: 5.8, phHigh: 6.8 }, climate: { meanAnnualRainfallMm: 1145, meanSummerHighC: 30.5, meanWinterLowC: -2.0, avgFirstFrost: "Oct 28", avgLastFrost: "Apr 10", growingSeasonDays: 201 } },
  { locationName: "Memphis, TN", lat: 35.1495, lon: -90.049, soil: { mapUnitName: "Memphis silt loam", componentName: "Memphis", texture: "Silt loam", drainage: "Well drained", phLow: 5.5, phHigh: 6.5 }, climate: { meanAnnualRainfallMm: 1365, meanSummerHighC: 32.5, meanWinterLowC: 0.5, avgFirstFrost: "Nov 8", avgLastFrost: "Mar 25", growingSeasonDays: 228 } },
  { locationName: "Houston, TX", lat: 29.7604, lon: -95.3698, soil: { mapUnitName: "Lake Charles clay", componentName: "Lake Charles", texture: "Clay", drainage: "Somewhat poorly drained", phLow: 6.0, phHigh: 7.2 }, climate: { meanAnnualRainfallMm: 1260, meanSummerHighC: 34.0, meanWinterLowC: 7.0, avgFirstFrost: "Dec 10", avgLastFrost: "Feb 15", growingSeasonDays: 298 } },
  { locationName: "Dallas, TX", lat: 32.7767, lon: -96.797, soil: { mapUnitName: "Houston Black clay", componentName: "Houston Black", texture: "Clay", drainage: "Moderately well drained", phLow: 7.0, phHigh: 8.0 }, climate: { meanAnnualRainfallMm: 945, meanSummerHighC: 35.0, meanWinterLowC: 2.0, avgFirstFrost: "Nov 20", avgLastFrost: "Mar 10", growingSeasonDays: 255 } },
  { locationName: "Austin, TX", lat: 30.2672, lon: -97.7431, soil: { mapUnitName: "Austin silty clay", componentName: "Austin", texture: "Silty clay", drainage: "Well drained", phLow: 7.2, phHigh: 8.0 }, climate: { meanAnnualRainfallMm: 870, meanSummerHighC: 35.5, meanWinterLowC: 4.5, avgFirstFrost: "Nov 28", avgLastFrost: "Mar 1", growingSeasonDays: 272 } },
  { locationName: "San Antonio, TX", lat: 29.4241, lon: -98.4936, soil: { mapUnitName: "Houston Black clay", componentName: "Houston Black", texture: "Clay", drainage: "Moderately well drained", phLow: 7.0, phHigh: 8.0 }, climate: { meanAnnualRainfallMm: 810, meanSummerHighC: 35.0, meanWinterLowC: 5.0, avgFirstFrost: "Dec 1", avgLastFrost: "Feb 25", growingSeasonDays: 279 } },
  { locationName: "Phoenix, AZ", lat: 33.4484, lon: -112.074, soil: { mapUnitName: "Gilman loam", componentName: "Gilman", texture: "Loam", drainage: "Well drained", phLow: 7.5, phHigh: 8.4 }, climate: { meanAnnualRainfallMm: 205, meanSummerHighC: 41.0, meanWinterLowC: 7.0, avgFirstFrost: "Dec 15", avgLastFrost: "Feb 10", growingSeasonDays: 308 } },
  { locationName: "Denver, CO", lat: 39.7392, lon: -104.9903, soil: { mapUnitName: "Renohill clay loam", componentName: "Renohill", texture: "Clay loam", drainage: "Well drained", phLow: 7.0, phHigh: 8.0 }, climate: { meanAnnualRainfallMm: 400, meanSummerHighC: 30.5, meanWinterLowC: -8.0, avgFirstFrost: "Oct 5", avgLastFrost: "May 5", growingSeasonDays: 153 } },
  { locationName: "Seattle, WA", lat: 47.6062, lon: -122.3321, soil: { mapUnitName: "Alderwood gravelly sandy loam", componentName: "Alderwood", texture: "Gravelly sandy loam", drainage: "Moderately well drained", phLow: 5.5, phHigh: 6.5 }, climate: { meanAnnualRainfallMm: 950, meanSummerHighC: 23.5, meanWinterLowC: 2.5, avgFirstFrost: "Nov 15", avgLastFrost: "Mar 20", growingSeasonDays: 240 } },
  { locationName: "Portland, OR", lat: 45.5152, lon: -122.6784, soil: { mapUnitName: "Woodburn silt loam", componentName: "Woodburn", texture: "Silt loam", drainage: "Moderately well drained", phLow: 5.5, phHigh: 6.5 }, climate: { meanAnnualRainfallMm: 915, meanSummerHighC: 26.5, meanWinterLowC: 2.0, avgFirstFrost: "Nov 10", avgLastFrost: "Mar 25", growingSeasonDays: 230 } },
  { locationName: "San Francisco, CA", lat: 37.7749, lon: -122.4194, soil: { mapUnitName: "Urban land-Orthents complex", componentName: "Orthents", texture: "Loam", drainage: "Well drained", phLow: 6.0, phHigh: 7.0 }, climate: { meanAnnualRainfallMm: 600, meanSummerHighC: 21.0, meanWinterLowC: 8.0, avgFirstFrost: "—", avgLastFrost: "—", growingSeasonDays: 330 } },
  { locationName: "Los Angeles, CA", lat: 34.0522, lon: -118.2437, soil: { mapUnitName: "Urban land-Palmview complex", componentName: "Palmview", texture: "Sandy loam", drainage: "Well drained", phLow: 6.5, phHigh: 7.5 }, climate: { meanAnnualRainfallMm: 380, meanSummerHighC: 28.5, meanWinterLowC: 9.0, avgFirstFrost: "—", avgLastFrost: "—", growingSeasonDays: 350 } },
  { locationName: "San Diego, CA", lat: 32.7157, lon: -117.1611, soil: { mapUnitName: "Huerhuero loam", componentName: "Huerhuero", texture: "Loam", drainage: "Moderately well drained", phLow: 6.5, phHigh: 7.5 }, climate: { meanAnnualRainfallMm: 265, meanSummerHighC: 26.0, meanWinterLowC: 10.0, avgFirstFrost: "—", avgLastFrost: "—", growingSeasonDays: 360 } },
  { locationName: "Minneapolis, MN", lat: 44.9778, lon: -93.265, soil: { mapUnitName: "Waukegan silt loam", componentName: "Waukegan", texture: "Silt loam", drainage: "Well drained", phLow: 6.0, phHigh: 7.0 }, climate: { meanAnnualRainfallMm: 780, meanSummerHighC: 28.0, meanWinterLowC: -13.0, avgFirstFrost: "Oct 5", avgLastFrost: "May 5", growingSeasonDays: 153 } },
  { locationName: "Kansas City, MO", lat: 39.0997, lon: -94.5786, soil: { mapUnitName: "Sharpsburg silty clay loam", componentName: "Sharpsburg", texture: "Silty clay loam", drainage: "Moderately well drained", phLow: 6.0, phHigh: 7.0 }, climate: { meanAnnualRainfallMm: 990, meanSummerHighC: 31.5, meanWinterLowC: -5.0, avgFirstFrost: "Oct 20", avgLastFrost: "Apr 15", growingSeasonDays: 188 } },
  { locationName: "Oklahoma City, OK", lat: 35.4676, lon: -97.5164, soil: { mapUnitName: "Kirkland silt loam", componentName: "Kirkland", texture: "Silt loam", drainage: "Moderately well drained", phLow: 6.2, phHigh: 7.2 }, climate: { meanAnnualRainfallMm: 910, meanSummerHighC: 34.0, meanWinterLowC: -1.5, avgFirstFrost: "Nov 5", avgLastFrost: "Mar 28", growingSeasonDays: 222 } },
];

// Ensure exactly 60 — trim if over
const cities = SEEDS.slice(0, 60);

const results = cities.map((seed) => ({
  ...seed,
  crops: rankCrops(seed.climate, seed.soil),
  fromCache: true as const,
}));

const out = `import type { CachedCity } from "@/lib/types";

/** Pre-computed soil, climate, and crop rankings for 60 US cities (Atlanta-weighted). */
export const CACHED_CITIES: CachedCity[] = ${JSON.stringify(results, null, 2)};
`;

writeFileSync(resolve(__dirname, "../data/cached.ts"), out);
console.log(`Wrote ${results.length} cities to data/cached.ts`);
