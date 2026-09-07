# Plantify

A single-page Next.js app that turns a rough location into a soil + climate profile and a ranked list of crops that will thrive there.

No auth. No database required for the core flow. Deployable on Vercel with zero environment variables.

## Stack

- Next.js App Router + TypeScript + Tailwind CSS
- `react-leaflet` + OpenStreetMap tiles (no API key)
- US Census Geocoder → Nominatim fallback
- Open-Meteo climate archive
- USDA SSURGO via Soil Data Access
- 60-city cached fallback (`data/cached.ts`) if any API fails or exceeds 4 seconds
- Optional Vercel KV for email capture

## Local setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

```bash
npx vercel --prod
```

No environment variables are required for geocoding, climate, soil, or crop scoring.

### Optional: email capture (Vercel KV)

1. Create a KV store in the Vercel dashboard (or Marketplace Redis that exposes KV REST env vars).
2. Link it so these are present:

```bash
KV_REST_API_URL=
KV_REST_API_TOKEN=
```

If KV is missing, `POST /api/email` logs the address and still returns success.

## How it works

1. Enter a city / ZIP / address, use browser geolocation, or tap the map.
2. All paths resolve to a lat/lon, then hit `POST /api/analyze`.
3. Pipeline: geocode (if needed) → Open-Meteo climate → SSURGO soil → crop scoring.
4. Hard 4s timeout; on failure, nearest city from `data/cached.ts` by haversine distance.

Regenerate cache seeds (optional):

```bash
npx tsx scripts/generate-cached.ts
```

## Project layout

```
app/                 # pages + API routes
components/          # client UI (map + main flow)
data/crops.ts        # 40 food crops
data/cached.ts       # 60 precomputed US cities
lib/                 # geocode, climate, soil, scoring, pipeline
```
