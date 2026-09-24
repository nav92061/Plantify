export type SoilProfile = {
  mapUnitName: string;
  componentName: string;
  texture: string;
  drainage: string;
  phLow: number;
  phHigh: number;
  estimatedPh?: string;
};

export type ClimateProfile = {
  meanAnnualRainfallMm: number;
  meanSummerHighC: number;
  meanWinterLowC: number;
  avgFirstFrost: string;
  avgLastFrost: string;
  growingSeasonDays: number;
};

export type Crop = {
  name: string;
  minTempC: number;
  maxTempC: number;
  minRainfallMm: number;
  maxRainfallMm: number;
  minPh: number;
  maxPh: number;
  daysToMaturity: number;
  season: "cool" | "warm";
};

export type RankedCrop = {
  name: string;
  score: number;
  reason: string;
  ph?: string;
  zones?: string;
  soil?: string;
  drainage?: string;
};

export type WateringAdvice = {
  headline: string;
  detail: string;
};

export type AnalyzeResult = {
  locationName: string;
  lat: number;
  lon: number;
  soil: SoilProfile;
  climate?: ClimateProfile;
  usdaZone?: string;
  watering?: WateringAdvice;
  crops: RankedCrop[];
  fromCache?: boolean;
};

export type AnalyzeRequest = {
  lat?: number;
  lon?: number;
  query?: string;
  label?: string;
};

export type CachedCity = AnalyzeResult & {
  lat: number;
  lon: number;
};
