import fs from "fs";
import path from "path";

export type CatalogCrop = {
  commodityType: string;
  genus: string;
  revenuePerAcre: string;
  usdaZones: string;
  preferredSoilDrainage: string;
  preferredPH: string;
  soilType: string;
};

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let currentField = "";
  let inQuotes = false;

  for (const character of line) {
    switch (character) {
      case '"':
        inQuotes = !inQuotes;
        break;
      case ",":
        if (inQuotes) {
          currentField += character;
        } else {
          result.push(currentField.trim());
          currentField = "";
        }
        break;
      default:
        currentField += character;
    }
  }

  result.push(currentField.trim());
  return result;
}

let cached: CatalogCrop[] | null = null;

export function loadCrops(): CatalogCrop[] {
  if (cached) return cached;

  const csvPath = path.join(process.cwd(), "data", "Crops.csv");
  const csvData = fs.readFileSync(csvPath, "utf8");
  const lines = csvData.split(/\r?\n/).filter((line) => line.length > 0);
  if (lines.length <= 1) {
    throw new Error("Crops.csv is empty");
  }

  const parsed: CatalogCrop[] = [];
  for (const line of lines.slice(1)) {
    const values = parseCSVLine(line);
    if (values.length < 7) continue;
    parsed.push({
      commodityType: values[0],
      genus: values[1],
      revenuePerAcre: values[2],
      usdaZones: values[3],
      preferredSoilDrainage: values[4],
      preferredPH: values[5],
      soilType: values[6],
    });
  }

  cached = parsed;
  return parsed;
}
