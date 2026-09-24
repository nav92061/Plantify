# Plantify

A single-page Next.js app that turns a rough location into a soil + climate profile and a ranked list of crops that will thrive there.

No auth. No database required for the core flow. Deployable on Vercel with zero environment variables.

## Stack

- Next.js App Router + TypeScript + Tailwind CSS
- `react-leaflet` + OpenStreetMap tiles (no API key)
- US Census Geocoder → Nominatim fallback
- USDA SSURGO via Soil Data Access (texture, drainage, and pH at the point)
- USDA hardiness zone from the ZIP code (`phzmapi.org`)
- Crop ranking from `data/Crops.csv` (pH, zone, texture, drainage, revenue)
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

No environment variables are required for geocoding, soil, hardiness zone, or crop scoring.

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
3. Pipeline: geocode (if needed) → SSURGO texture, drainage, and pH → ZIP hardiness zone → rank `data/Crops.csv`.
4. Ranking uses the iOS weights with revenue left out: pH, hardiness zone, texture, and drainage. The scored pH is the midpoint of the survey’s low and high. ZIP codes come from Census ZIP Code Tabulation Area polygons, then OpenStreetMap if that layer misses.

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
