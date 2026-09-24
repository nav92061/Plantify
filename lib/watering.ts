import type { SoilProfile, WateringAdvice } from "@/lib/types";

export function phWords(phLow: number, phHigh: number): string {
  const mid = (phLow + phHigh) / 2;
  if (mid < 5.5) return "Very acidic";
  if (mid < 6.2) return "Acidic";
  if (mid < 6.8) return "Mildly acidic";
  if (mid < 7.5) return "Near neutral";
  return "Alkaline";
}

export function wateringAdvice(soil: SoilProfile): WateringAdvice {
  const texture = soil.texture.toLowerCase();
  const drainage = soil.drainage.toLowerCase();
  const sandy = texture.includes("sand");
  const clay = texture.includes("clay");
  const poor = drainage.includes("poor");
  const excessive = drainage.includes("excessive");
  const well = drainage.includes("well");

  if (excessive || (sandy && !clay)) {
    return {
      headline: "Water more often",
      detail:
        "This soil dries out quickly. In warm weather, water deeply every 2–3 days. Check the top inch with a finger and water again only when it feels dry.",
    };
  }

  if (poor) {
    return {
      headline: "Water less often",
      detail:
        "This soil holds moisture. A deep soak about once a week is enough. If the top inch is still damp, wait so roots are not left sitting in water.",
    };
  }

  if (clay) {
    return {
      headline: "Soak, then wait",
      detail:
        "Clay keeps water longer than sand. Water deeply, then wait until the top inch dries. In summer that is usually every 4–5 days.",
    };
  }

  return {
    headline: well ? "Steady watering" : "Water when the top inch is dry",
    detail: well
      ? "This soil drains and still holds enough moisture for most vegetables. Water deeply every 3–4 days in summer, and skip a turn if the top inch is still cool and damp."
      : "Feel the top inch of soil. If it is dry, water deeply. If it is still damp, wait a day.",
  };
}
