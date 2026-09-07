import type { ClimateProfile } from "@/lib/types";

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatDayOfYear(doy: number): string {
  const clamped = Math.max(1, Math.min(365, Math.round(doy)));
  const date = new Date(Date.UTC(2021, 0, clamped));
  return `${MONTH_NAMES[date.getUTCMonth()]} ${date.getUTCDate()}`;
}

function dayOfYear(isoDate: string): number {
  const d = new Date(`${isoDate}T00:00:00Z`);
  const start = Date.UTC(d.getUTCFullYear(), 0, 0);
  return Math.floor((d.getTime() - start) / 86_400_000);
}

type DailySeries = {
  time: string[];
  temperature_2m_max: (number | null)[];
  temperature_2m_min: (number | null)[];
  precipitation_sum: (number | null)[];
};

export async function fetchClimate(
  lat: number,
  lon: number,
): Promise<ClimateProfile> {
  const end = new Date();
  end.setUTCDate(end.getUTCDate() - 5);
  const start = new Date(end);
  start.setUTCFullYear(start.getUTCFullYear() - 10);

  const startDate = start.toISOString().slice(0, 10);
  const endDate = end.toISOString().slice(0, 10);

  const url = new URL("https://archive-api.open-meteo.com/v1/archive");
  url.searchParams.set("latitude", String(lat));
  url.searchParams.set("longitude", String(lon));
  url.searchParams.set("start_date", startDate);
  url.searchParams.set("end_date", endDate);
  url.searchParams.set(
    "daily",
    "temperature_2m_max,temperature_2m_min,precipitation_sum",
  );
  url.searchParams.set("timezone", "auto");

  const res = await fetch(url.toString(), {
    headers: { Accept: "application/json" },
    next: { revalidate: 0 },
  });
  if (!res.ok) {
    throw new Error(`Open-Meteo error ${res.status}`);
  }

  const payload = (await res.json()) as { daily?: DailySeries };
  const daily = payload.daily;
  if (!daily?.time?.length) {
    throw new Error("Open-Meteo returned no daily data");
  }

  const byYear = new Map<
    number,
    { precip: number; summerHighs: number[]; winterLows: number[]; mins: { doy: number; t: number }[] }
  >();

  for (let i = 0; i < daily.time.length; i++) {
    const iso = daily.time[i];
    const year = Number(iso.slice(0, 4));
    const month = Number(iso.slice(5, 7));
    const tmax = daily.temperature_2m_max[i];
    const tmin = daily.temperature_2m_min[i];
    const precip = daily.precipitation_sum[i] ?? 0;

    let bucket = byYear.get(year);
    if (!bucket) {
      bucket = { precip: 0, summerHighs: [], winterLows: [], mins: [] };
      byYear.set(year, bucket);
    }

    bucket.precip += precip;
    if (tmax != null && month >= 6 && month <= 8) bucket.summerHighs.push(tmax);
    if (tmin != null && (month === 12 || month <= 2)) bucket.winterLows.push(tmin);
    if (tmin != null) bucket.mins.push({ doy: dayOfYear(iso), t: tmin });
  }

  const years = [...byYear.values()];
  if (!years.length) throw new Error("No climate years available");

  const meanAnnualRainfallMm =
    years.reduce((s, y) => s + y.precip, 0) / years.length;

  const allSummer = years.flatMap((y) => y.summerHighs);
  const allWinter = years.flatMap((y) => y.winterLows);
  const meanSummerHighC =
    allSummer.reduce((s, v) => s + v, 0) / Math.max(1, allSummer.length);
  const meanWinterLowC =
    allWinter.reduce((s, v) => s + v, 0) / Math.max(1, allWinter.length);

  const lastFrosts: number[] = [];
  const firstFrosts: number[] = [];

  for (const year of years) {
    const spring = year.mins.filter((m) => m.doy <= 180);
    const fall = year.mins.filter((m) => m.doy >= 180);

    let lastFrost: number | null = null;
    for (const m of spring) {
      if (m.t <= 0) lastFrost = m.doy;
    }
    if (lastFrost != null) lastFrosts.push(lastFrost);

    let firstFrost: number | null = null;
    for (const m of fall) {
      if (m.t <= 0) {
        firstFrost = m.doy;
        break;
      }
    }
    if (firstFrost != null) firstFrosts.push(firstFrost);
  }

  const avgLastFrostDoy =
    lastFrosts.length > 0
      ? lastFrosts.reduce((s, v) => s + v, 0) / lastFrosts.length
      : 60;
  const avgFirstFrostDoy =
    firstFrosts.length > 0
      ? firstFrosts.reduce((s, v) => s + v, 0) / firstFrosts.length
      : 320;

  const growingSeasonDays = Math.max(
    0,
    Math.round(avgFirstFrostDoy - avgLastFrostDoy),
  );

  return {
    meanAnnualRainfallMm: Math.round(meanAnnualRainfallMm),
    meanSummerHighC: Math.round(meanSummerHighC * 10) / 10,
    meanWinterLowC: Math.round(meanWinterLowC * 10) / 10,
    avgFirstFrost: formatDayOfYear(avgFirstFrostDoy),
    avgLastFrost: formatDayOfYear(avgLastFrostDoy),
    growingSeasonDays,
  };
}
