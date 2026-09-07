import type { CachedCity } from "@/lib/types";

/** Pre-computed soil, climate, and crop rankings for 60 US cities (Atlanta-weighted). */
export const CACHED_CITIES: CachedCity[] = [
  {
    "locationName": "Atlanta, GA",
    "lat": 33.749,
    "lon": -84.388,
    "soil": {
      "mapUnitName": "Cecil sandy loam",
      "componentName": "Cecil",
      "texture": "Sandy loam",
      "drainage": "Well drained",
      "phLow": 5.1,
      "phHigh": 6
    },
    "climate": {
      "meanAnnualRainfallMm": 1260,
      "meanSummerHighC": 31.5,
      "meanWinterLowC": 1.2,
      "avgFirstFrost": "Nov 12",
      "avgLastFrost": "Mar 22",
      "growingSeasonDays": 235
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.898,
        "reason": "Warm-season crop suits 235-day season; rainfall and pH (5.1–6.0) sit comfortably in range."
      },
      {
        "name": "Blueberry",
        "score": 0.879,
        "reason": "Cool-season crop fits frost window (Mar 22–Nov 12); rainfall and pH (5.1–6.0) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.866,
        "reason": "Warm-season crop suits 235-day season; rainfall and pH (5.1–6.0) sit comfortably in range."
      },
      {
        "name": "Sweet Potato",
        "score": 0.859,
        "reason": "Warm-season crop suits 235-day season; rainfall and pH (5.1–6.0) sit comfortably in range."
      },
      {
        "name": "Kale",
        "score": 0.829,
        "reason": "Cool-season crop fits frost window (Mar 22–Nov 12); 1260 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.81,
        "reason": "Warm-season crop suits 235-day season; 1260 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Okra",
        "score": 0.807,
        "reason": "Warm-season crop suits 235-day season; 1260 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Strawberry",
        "score": 0.804,
        "reason": "Cool-season crop fits frost window (Mar 22–Nov 12); 1260 mm rain and sandy loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Decatur, GA",
    "lat": 33.7748,
    "lon": -84.2963,
    "soil": {
      "mapUnitName": "Pacolet sandy loam",
      "componentName": "Pacolet",
      "texture": "Sandy loam",
      "drainage": "Well drained",
      "phLow": 5,
      "phHigh": 5.8
    },
    "climate": {
      "meanAnnualRainfallMm": 1255,
      "meanSummerHighC": 31.4,
      "meanWinterLowC": 1.3,
      "avgFirstFrost": "Nov 13",
      "avgLastFrost": "Mar 21",
      "growingSeasonDays": 237
    },
    "crops": [
      {
        "name": "Blueberry",
        "score": 0.9,
        "reason": "Cool-season crop fits frost window (Mar 21–Nov 13); rainfall and pH (5.0–5.8) sit comfortably in range."
      },
      {
        "name": "Muscadine Grape",
        "score": 0.883,
        "reason": "Warm-season crop suits 237-day season; rainfall and pH (5.0–5.8) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.864,
        "reason": "Warm-season crop suits 237-day season; rainfall and pH (5.0–5.8) sit comfortably in range."
      },
      {
        "name": "Sweet Potato",
        "score": 0.858,
        "reason": "Warm-season crop suits 237-day season; rainfall and pH (5.0–5.8) sit comfortably in range."
      },
      {
        "name": "Kale",
        "score": 0.828,
        "reason": "Cool-season crop fits frost window (Mar 21–Nov 13); 1255 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.797,
        "reason": "Warm-season crop suits 237-day season; 1255 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Potato",
        "score": 0.792,
        "reason": "Cool-season crop fits frost window (Mar 21–Nov 13); 1255 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Strawberry",
        "score": 0.792,
        "reason": "Cool-season crop fits frost window (Mar 21–Nov 13); 1255 mm rain and sandy loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Marietta, GA",
    "lat": 33.9526,
    "lon": -84.5499,
    "soil": {
      "mapUnitName": "Madison sandy clay loam",
      "componentName": "Madison",
      "texture": "Sandy clay loam",
      "drainage": "Well drained",
      "phLow": 5.2,
      "phHigh": 6.1
    },
    "climate": {
      "meanAnnualRainfallMm": 1320,
      "meanSummerHighC": 30.8,
      "meanWinterLowC": 0.5,
      "avgFirstFrost": "Nov 8",
      "avgLastFrost": "Mar 28",
      "growingSeasonDays": 225
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.901,
        "reason": "Warm-season crop suits 225-day season; rainfall and pH (5.2–6.1) sit comfortably in range."
      },
      {
        "name": "Blueberry",
        "score": 0.864,
        "reason": "Cool-season crop fits frost window (Mar 28–Nov 8); rainfall and pH (5.2–6.1) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.851,
        "reason": "Warm-season crop suits 225-day season; rainfall and pH (5.2–6.1) sit comfortably in range."
      },
      {
        "name": "Sweet Potato",
        "score": 0.839,
        "reason": "Warm-season crop suits 225-day season; 1320 mm rain and sandy clay loam soils are a solid match."
      },
      {
        "name": "Kale",
        "score": 0.823,
        "reason": "Cool-season crop fits frost window (Mar 28–Nov 8); 1320 mm rain and sandy clay loam soils are a solid match."
      },
      {
        "name": "Okra",
        "score": 0.798,
        "reason": "Warm-season crop suits 225-day season; 1320 mm rain and sandy clay loam soils are a solid match."
      },
      {
        "name": "Strawberry",
        "score": 0.797,
        "reason": "Cool-season crop fits frost window (Mar 28–Nov 8); 1320 mm rain and sandy clay loam soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.794,
        "reason": "Warm-season crop suits 225-day season; 1320 mm rain and sandy clay loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Alpharetta, GA",
    "lat": 34.0754,
    "lon": -84.2941,
    "soil": {
      "mapUnitName": "Cecil-Urban land complex",
      "componentName": "Cecil",
      "texture": "Sandy loam",
      "drainage": "Well drained",
      "phLow": 5.3,
      "phHigh": 6.2
    },
    "climate": {
      "meanAnnualRainfallMm": 1335,
      "meanSummerHighC": 30.6,
      "meanWinterLowC": 0.2,
      "avgFirstFrost": "Nov 6",
      "avgLastFrost": "Mar 30",
      "growingSeasonDays": 221
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.905,
        "reason": "Warm-season crop suits 221-day season; rainfall and pH (5.3–6.2) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.849,
        "reason": "Warm-season crop suits 221-day season; 1335 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Blueberry",
        "score": 0.848,
        "reason": "Cool-season crop fits frost window (Mar 30–Nov 6); 1335 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Sweet Potato",
        "score": 0.833,
        "reason": "Warm-season crop suits 221-day season; 1335 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Kale",
        "score": 0.824,
        "reason": "Cool-season crop fits frost window (Mar 30–Nov 6); 1335 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Okra",
        "score": 0.804,
        "reason": "Warm-season crop suits 221-day season; 1335 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Strawberry",
        "score": 0.8,
        "reason": "Cool-season crop fits frost window (Mar 30–Nov 6); 1335 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.794,
        "reason": "Warm-season crop suits 221-day season; 1335 mm rain and sandy loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Roswell, GA",
    "lat": 34.0232,
    "lon": -84.3616,
    "soil": {
      "mapUnitName": "Pacolet clay loam",
      "componentName": "Pacolet",
      "texture": "Clay loam",
      "drainage": "Well drained",
      "phLow": 5.1,
      "phHigh": 5.9
    },
    "climate": {
      "meanAnnualRainfallMm": 1328,
      "meanSummerHighC": 30.7,
      "meanWinterLowC": 0.3,
      "avgFirstFrost": "Nov 7",
      "avgLastFrost": "Mar 29",
      "growingSeasonDays": 223
    },
    "crops": [
      {
        "name": "Blueberry",
        "score": 0.886,
        "reason": "Cool-season crop fits frost window (Mar 29–Nov 7); rainfall and pH (5.1–5.9) sit comfortably in range."
      },
      {
        "name": "Muscadine Grape",
        "score": 0.884,
        "reason": "Warm-season crop suits 223-day season; rainfall and pH (5.1–5.9) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.842,
        "reason": "Warm-season crop suits 223-day season; 1328 mm rain and clay loam soils are a solid match."
      },
      {
        "name": "Sweet Potato",
        "score": 0.834,
        "reason": "Warm-season crop suits 223-day season; 1328 mm rain and clay loam soils are a solid match."
      },
      {
        "name": "Kale",
        "score": 0.815,
        "reason": "Cool-season crop fits frost window (Mar 29–Nov 7); 1328 mm rain and clay loam soils are a solid match."
      },
      {
        "name": "Strawberry",
        "score": 0.78,
        "reason": "Cool-season crop fits frost window (Mar 29–Nov 7); 1328 mm rain and clay loam soils are a solid match."
      },
      {
        "name": "Okra",
        "score": 0.777,
        "reason": "Warm-season crop suits 223-day season; 1328 mm rain and clay loam soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.775,
        "reason": "Warm-season crop suits 223-day season; 1328 mm rain and clay loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Sandy Springs, GA",
    "lat": 33.9304,
    "lon": -84.3733,
    "soil": {
      "mapUnitName": "Cecil sandy loam",
      "componentName": "Cecil",
      "texture": "Sandy loam",
      "drainage": "Well drained",
      "phLow": 5.2,
      "phHigh": 6
    },
    "climate": {
      "meanAnnualRainfallMm": 1285,
      "meanSummerHighC": 31.1,
      "meanWinterLowC": 0.8,
      "avgFirstFrost": "Nov 10",
      "avgLastFrost": "Mar 25",
      "growingSeasonDays": 230
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.901,
        "reason": "Warm-season crop suits 230-day season; rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Blueberry",
        "score": 0.877,
        "reason": "Cool-season crop fits frost window (Mar 25–Nov 10); rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.86,
        "reason": "Warm-season crop suits 230-day season; rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Sweet Potato",
        "score": 0.852,
        "reason": "Warm-season crop suits 230-day season; rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Kale",
        "score": 0.828,
        "reason": "Cool-season crop fits frost window (Mar 25–Nov 10); 1285 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Okra",
        "score": 0.808,
        "reason": "Warm-season crop suits 230-day season; 1285 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.806,
        "reason": "Warm-season crop suits 230-day season; 1285 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Strawberry",
        "score": 0.805,
        "reason": "Cool-season crop fits frost window (Mar 25–Nov 10); 1285 mm rain and sandy loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Brookhaven, GA",
    "lat": 33.8651,
    "lon": -84.3366,
    "soil": {
      "mapUnitName": "Urban land-Cecil complex",
      "componentName": "Cecil",
      "texture": "Loam",
      "drainage": "Well drained",
      "phLow": 5.4,
      "phHigh": 6.3
    },
    "climate": {
      "meanAnnualRainfallMm": 1270,
      "meanSummerHighC": 31.2,
      "meanWinterLowC": 1,
      "avgFirstFrost": "Nov 11",
      "avgLastFrost": "Mar 24",
      "growingSeasonDays": 232
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.916,
        "reason": "Warm-season crop suits 232-day season; rainfall and pH (5.4–6.3) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.873,
        "reason": "Warm-season crop suits 232-day season; rainfall and pH (5.4–6.3) sit comfortably in range."
      },
      {
        "name": "Sweet Potato",
        "score": 0.857,
        "reason": "Warm-season crop suits 232-day season; rainfall and pH (5.4–6.3) sit comfortably in range."
      },
      {
        "name": "Kale",
        "score": 0.839,
        "reason": "Cool-season crop fits frost window (Mar 24–Nov 11); 1270 mm rain and loam soils are a solid match."
      },
      {
        "name": "Okra",
        "score": 0.838,
        "reason": "Warm-season crop suits 232-day season; 1270 mm rain and loam soils are a solid match."
      },
      {
        "name": "Blueberry",
        "score": 0.832,
        "reason": "Cool-season crop fits frost window (Mar 24–Nov 11); 1270 mm rain and loam soils are a solid match."
      },
      {
        "name": "Sweet Corn",
        "score": 0.828,
        "reason": "Warm-season crop suits 232-day season; 1270 mm rain and loam soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.825,
        "reason": "Warm-season crop suits 232-day season; 1270 mm rain and loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Smyrna, GA",
    "lat": 33.8839,
    "lon": -84.5144,
    "soil": {
      "mapUnitName": "Madison sandy loam",
      "componentName": "Madison",
      "texture": "Sandy loam",
      "drainage": "Well drained",
      "phLow": 5.2,
      "phHigh": 6
    },
    "climate": {
      "meanAnnualRainfallMm": 1295,
      "meanSummerHighC": 31,
      "meanWinterLowC": 0.6,
      "avgFirstFrost": "Nov 9",
      "avgLastFrost": "Mar 26",
      "growingSeasonDays": 228
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.9,
        "reason": "Warm-season crop suits 228-day season; rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Blueberry",
        "score": 0.877,
        "reason": "Cool-season crop fits frost window (Mar 26–Nov 9); rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.856,
        "reason": "Warm-season crop suits 228-day season; rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Sweet Potato",
        "score": 0.848,
        "reason": "Warm-season crop suits 228-day season; 1295 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Kale",
        "score": 0.826,
        "reason": "Cool-season crop fits frost window (Mar 26–Nov 9); 1295 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Okra",
        "score": 0.803,
        "reason": "Warm-season crop suits 228-day season; 1295 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Strawberry",
        "score": 0.802,
        "reason": "Cool-season crop fits frost window (Mar 26–Nov 9); 1295 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.801,
        "reason": "Warm-season crop suits 228-day season; 1295 mm rain and sandy loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Dunwoody, GA",
    "lat": 33.9462,
    "lon": -84.3346,
    "soil": {
      "mapUnitName": "Cecil sandy clay loam",
      "componentName": "Cecil",
      "texture": "Sandy clay loam",
      "drainage": "Well drained",
      "phLow": 5.1,
      "phHigh": 5.9
    },
    "climate": {
      "meanAnnualRainfallMm": 1290,
      "meanSummerHighC": 30.9,
      "meanWinterLowC": 0.7,
      "avgFirstFrost": "Nov 9",
      "avgLastFrost": "Mar 26",
      "growingSeasonDays": 228
    },
    "crops": [
      {
        "name": "Blueberry",
        "score": 0.889,
        "reason": "Cool-season crop fits frost window (Mar 26–Nov 9); rainfall and pH (5.1–5.9) sit comfortably in range."
      },
      {
        "name": "Muscadine Grape",
        "score": 0.889,
        "reason": "Warm-season crop suits 228-day season; rainfall and pH (5.1–5.9) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.855,
        "reason": "Warm-season crop suits 228-day season; rainfall and pH (5.1–5.9) sit comfortably in range."
      },
      {
        "name": "Sweet Potato",
        "score": 0.849,
        "reason": "Warm-season crop suits 228-day season; 1290 mm rain and sandy clay loam soils are a solid match."
      },
      {
        "name": "Kale",
        "score": 0.825,
        "reason": "Cool-season crop fits frost window (Mar 26–Nov 9); 1290 mm rain and sandy clay loam soils are a solid match."
      },
      {
        "name": "Strawberry",
        "score": 0.794,
        "reason": "Cool-season crop fits frost window (Mar 26–Nov 9); 1290 mm rain and sandy clay loam soils are a solid match."
      },
      {
        "name": "Okra",
        "score": 0.792,
        "reason": "Warm-season crop suits 228-day season; 1290 mm rain and sandy clay loam soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.792,
        "reason": "Warm-season crop suits 228-day season; 1290 mm rain and sandy clay loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Johns Creek, GA",
    "lat": 34.0289,
    "lon": -84.1986,
    "soil": {
      "mapUnitName": "Pacolet sandy loam",
      "componentName": "Pacolet",
      "texture": "Sandy loam",
      "drainage": "Well drained",
      "phLow": 5,
      "phHigh": 5.8
    },
    "climate": {
      "meanAnnualRainfallMm": 1340,
      "meanSummerHighC": 30.5,
      "meanWinterLowC": 0.1,
      "avgFirstFrost": "Nov 5",
      "avgLastFrost": "Mar 31",
      "growingSeasonDays": 219
    },
    "crops": [
      {
        "name": "Blueberry",
        "score": 0.899,
        "reason": "Cool-season crop fits frost window (Mar 31–Nov 5); rainfall and pH (5.0–5.8) sit comfortably in range."
      },
      {
        "name": "Muscadine Grape",
        "score": 0.872,
        "reason": "Warm-season crop suits 219-day season; rainfall and pH (5.0–5.8) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.836,
        "reason": "Warm-season crop suits 219-day season; 1340 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Sweet Potato",
        "score": 0.826,
        "reason": "Warm-season crop suits 219-day season; 1340 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Kale",
        "score": 0.812,
        "reason": "Cool-season crop fits frost window (Mar 31–Nov 5); 1340 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Potato",
        "score": 0.767,
        "reason": "Cool-season crop fits frost window (Mar 31–Nov 5); 1340 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Strawberry",
        "score": 0.767,
        "reason": "Cool-season crop fits frost window (Mar 31–Nov 5); 1340 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Mustard Greens",
        "score": 0.764,
        "reason": "Cool-season crop fits frost window (Mar 31–Nov 5); 1340 mm rain and sandy loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Lawrenceville, GA",
    "lat": 33.9562,
    "lon": -83.9881,
    "soil": {
      "mapUnitName": "Cecil sandy loam",
      "componentName": "Cecil",
      "texture": "Sandy loam",
      "drainage": "Well drained",
      "phLow": 5.1,
      "phHigh": 6
    },
    "climate": {
      "meanAnnualRainfallMm": 1305,
      "meanSummerHighC": 30.9,
      "meanWinterLowC": 0.4,
      "avgFirstFrost": "Nov 8",
      "avgLastFrost": "Mar 28",
      "growingSeasonDays": 225
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.892,
        "reason": "Warm-season crop suits 225-day season; rainfall and pH (5.1–6.0) sit comfortably in range."
      },
      {
        "name": "Blueberry",
        "score": 0.88,
        "reason": "Cool-season crop fits frost window (Mar 28–Nov 8); rainfall and pH (5.1–6.0) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.851,
        "reason": "Warm-season crop suits 225-day season; rainfall and pH (5.1–6.0) sit comfortably in range."
      },
      {
        "name": "Sweet Potato",
        "score": 0.841,
        "reason": "Warm-season crop suits 225-day season; 1305 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Kale",
        "score": 0.822,
        "reason": "Cool-season crop fits frost window (Mar 28–Nov 8); 1305 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Strawberry",
        "score": 0.793,
        "reason": "Cool-season crop fits frost window (Mar 28–Nov 8); 1305 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.79,
        "reason": "Warm-season crop suits 225-day season; 1305 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Okra",
        "score": 0.789,
        "reason": "Warm-season crop suits 225-day season; 1305 mm rain and sandy loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Athens, GA",
    "lat": 33.9519,
    "lon": -83.3577,
    "soil": {
      "mapUnitName": "Cecil-Madison complex",
      "componentName": "Cecil",
      "texture": "Sandy clay loam",
      "drainage": "Well drained",
      "phLow": 5.2,
      "phHigh": 6.1
    },
    "climate": {
      "meanAnnualRainfallMm": 1215,
      "meanSummerHighC": 31.8,
      "meanWinterLowC": 1.5,
      "avgFirstFrost": "Nov 10",
      "avgLastFrost": "Mar 20",
      "growingSeasonDays": 235
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.912,
        "reason": "Warm-season crop suits 235-day season; rainfall and pH (5.2–6.1) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.884,
        "reason": "Warm-season crop suits 235-day season; rainfall and pH (5.2–6.1) sit comfortably in range."
      },
      {
        "name": "Sweet Potato",
        "score": 0.877,
        "reason": "Warm-season crop suits 235-day season; rainfall and pH (5.2–6.1) sit comfortably in range."
      },
      {
        "name": "Blueberry",
        "score": 0.867,
        "reason": "Cool-season crop fits frost window (Mar 20–Nov 10); rainfall and pH (5.2–6.1) sit comfortably in range."
      },
      {
        "name": "Kale",
        "score": 0.843,
        "reason": "Cool-season crop fits frost window (Mar 20–Nov 10); 1215 mm rain and sandy clay loam soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.839,
        "reason": "Warm-season crop suits 235-day season; 1215 mm rain and sandy clay loam soils are a solid match."
      },
      {
        "name": "Okra",
        "score": 0.836,
        "reason": "Warm-season crop suits 235-day season; 1215 mm rain and sandy clay loam soils are a solid match."
      },
      {
        "name": "Strawberry",
        "score": 0.829,
        "reason": "Cool-season crop fits frost window (Mar 20–Nov 10); 1215 mm rain and sandy clay loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Gainesville, GA",
    "lat": 34.2979,
    "lon": -83.8241,
    "soil": {
      "mapUnitName": "Hiwassee clay loam",
      "componentName": "Hiwassee",
      "texture": "Clay loam",
      "drainage": "Well drained",
      "phLow": 5.3,
      "phHigh": 6.2
    },
    "climate": {
      "meanAnnualRainfallMm": 1380,
      "meanSummerHighC": 30,
      "meanWinterLowC": -0.5,
      "avgFirstFrost": "Nov 2",
      "avgLastFrost": "Apr 5",
      "growingSeasonDays": 211
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.899,
        "reason": "Warm-season crop suits 211-day season; rainfall and pH (5.3–6.2) sit comfortably in range."
      },
      {
        "name": "Blueberry",
        "score": 0.849,
        "reason": "Cool-season crop fits frost window (Apr 5–Nov 2); 1380 mm rain and clay loam soils are a solid match."
      },
      {
        "name": "Tomato",
        "score": 0.834,
        "reason": "Warm-season crop suits 211-day season; 1380 mm rain and clay loam soils are a solid match."
      },
      {
        "name": "Kale",
        "score": 0.817,
        "reason": "Cool-season crop fits frost window (Apr 5–Nov 2); 1380 mm rain and clay loam soils are a solid match."
      },
      {
        "name": "Sweet Potato",
        "score": 0.816,
        "reason": "Warm-season crop suits 211-day season; 1380 mm rain and clay loam soils are a solid match."
      },
      {
        "name": "Strawberry",
        "score": 0.804,
        "reason": "Cool-season crop fits frost window (Apr 5–Nov 2); 1380 mm rain and clay loam soils are a solid match."
      },
      {
        "name": "Okra",
        "score": 0.787,
        "reason": "Warm-season crop suits 211-day season; 1380 mm rain and clay loam soils are a solid match."
      },
      {
        "name": "Collard Greens",
        "score": 0.782,
        "reason": "Cool-season crop fits frost window (Apr 5–Nov 2); 1380 mm rain and clay loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Rome, GA",
    "lat": 34.257,
    "lon": -85.1647,
    "soil": {
      "mapUnitName": "Conasauga silt loam",
      "componentName": "Conasauga",
      "texture": "Silt loam",
      "drainage": "Moderately well drained",
      "phLow": 5.5,
      "phHigh": 6.5
    },
    "climate": {
      "meanAnnualRainfallMm": 1350,
      "meanSummerHighC": 31.2,
      "meanWinterLowC": 0,
      "avgFirstFrost": "Nov 5",
      "avgLastFrost": "Apr 1",
      "growingSeasonDays": 218
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.898,
        "reason": "Warm-season crop suits 218-day season; rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.842,
        "reason": "Warm-season crop suits 218-day season; 1350 mm rain and silt loam soils are a solid match."
      },
      {
        "name": "Sweet Potato",
        "score": 0.819,
        "reason": "Warm-season crop suits 218-day season; 1350 mm rain and silt loam soils are a solid match."
      },
      {
        "name": "Okra",
        "score": 0.812,
        "reason": "Warm-season crop suits 218-day season; 1350 mm rain and silt loam soils are a solid match."
      },
      {
        "name": "Kale",
        "score": 0.812,
        "reason": "Cool-season crop fits frost window (Apr 1–Nov 5); 1350 mm rain and silt loam soils are a solid match."
      },
      {
        "name": "Sweet Corn",
        "score": 0.8,
        "reason": "Warm-season crop suits 218-day season; 1350 mm rain and silt loam soils are a solid match."
      },
      {
        "name": "Collard Greens",
        "score": 0.794,
        "reason": "Cool-season crop fits frost window (Apr 1–Nov 5); 1350 mm rain and silt loam soils are a solid match."
      },
      {
        "name": "Blueberry",
        "score": 0.79,
        "reason": "Cool-season crop fits frost window (Apr 1–Nov 5); 1350 mm rain and silt loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Macon, GA",
    "lat": 32.8407,
    "lon": -83.6324,
    "soil": {
      "mapUnitName": "Tifton loamy sand",
      "componentName": "Tifton",
      "texture": "Loamy sand",
      "drainage": "Well drained",
      "phLow": 5,
      "phHigh": 5.8
    },
    "climate": {
      "meanAnnualRainfallMm": 1165,
      "meanSummerHighC": 33,
      "meanWinterLowC": 2.8,
      "avgFirstFrost": "Nov 18",
      "avgLastFrost": "Mar 10",
      "growingSeasonDays": 253
    },
    "crops": [
      {
        "name": "Blueberry",
        "score": 0.895,
        "reason": "Cool-season crop fits frost window (Mar 10–Nov 18); rainfall and pH (5.0–5.8) sit comfortably in range."
      },
      {
        "name": "Muscadine Grape",
        "score": 0.894,
        "reason": "Warm-season crop suits 253-day season; rainfall and pH (5.0–5.8) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.878,
        "reason": "Warm-season crop suits 253-day season; rainfall and pH (5.0–5.8) sit comfortably in range."
      },
      {
        "name": "Eggplant",
        "score": 0.853,
        "reason": "Warm-season crop suits 253-day season; rainfall and pH (5.0–5.8) sit comfortably in range."
      },
      {
        "name": "Sweet Potato",
        "score": 0.844,
        "reason": "Warm-season crop suits 253-day season; 1165 mm rain and loamy sand soils are a solid match."
      },
      {
        "name": "Basil",
        "score": 0.838,
        "reason": "Warm-season crop suits 253-day season; 1165 mm rain and loamy sand soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.835,
        "reason": "Warm-season crop suits 253-day season; 1165 mm rain and loamy sand soils are a solid match."
      },
      {
        "name": "Sweet Corn",
        "score": 0.814,
        "reason": "Warm-season crop suits 253-day season; 1165 mm rain and loamy sand soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Augusta, GA",
    "lat": 33.4735,
    "lon": -82.0105,
    "soil": {
      "mapUnitName": "Lakeland sand",
      "componentName": "Lakeland",
      "texture": "Sand",
      "drainage": "Excessively drained",
      "phLow": 4.8,
      "phHigh": 5.6
    },
    "climate": {
      "meanAnnualRainfallMm": 1130,
      "meanSummerHighC": 33.2,
      "meanWinterLowC": 2.5,
      "avgFirstFrost": "Nov 16",
      "avgLastFrost": "Mar 12",
      "growingSeasonDays": 249
    },
    "crops": [
      {
        "name": "Blueberry",
        "score": 0.91,
        "reason": "Cool-season crop fits frost window (Mar 12–Nov 16); rainfall and pH (4.8–5.6) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.863,
        "reason": "Warm-season crop suits 249-day season; rainfall and pH (4.8–5.6) sit comfortably in range."
      },
      {
        "name": "Muscadine Grape",
        "score": 0.862,
        "reason": "Warm-season crop suits 249-day season; rainfall and pH (4.8–5.6) sit comfortably in range."
      },
      {
        "name": "Sweet Potato",
        "score": 0.842,
        "reason": "Warm-season crop suits 249-day season; 1130 mm rain and sand soils are a solid match."
      },
      {
        "name": "Eggplant",
        "score": 0.84,
        "reason": "Warm-season crop suits 249-day season; 1130 mm rain and sand soils are a solid match."
      },
      {
        "name": "Basil",
        "score": 0.827,
        "reason": "Warm-season crop suits 249-day season; 1130 mm rain and sand soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.813,
        "reason": "Warm-season crop suits 249-day season; 1130 mm rain and sand soils are a solid match."
      },
      {
        "name": "Bell Pepper",
        "score": 0.797,
        "reason": "Warm-season crop suits 249-day season; 1130 mm rain and sand soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Savannah, GA",
    "lat": 32.0809,
    "lon": -81.0912,
    "soil": {
      "mapUnitName": "Ocilla loamy sand",
      "componentName": "Ocilla",
      "texture": "Loamy sand",
      "drainage": "Somewhat poorly drained",
      "phLow": 5,
      "phHigh": 5.8
    },
    "climate": {
      "meanAnnualRainfallMm": 1245,
      "meanSummerHighC": 32.5,
      "meanWinterLowC": 5,
      "avgFirstFrost": "Dec 5",
      "avgLastFrost": "Feb 20",
      "growingSeasonDays": 288
    },
    "crops": [
      {
        "name": "Tomato",
        "score": 0.919,
        "reason": "Warm-season crop suits 288-day season; rainfall and pH (5.0–5.8) sit comfortably in range."
      },
      {
        "name": "Blueberry",
        "score": 0.894,
        "reason": "Cool-season crop fits frost window (Feb 20–Dec 5); rainfall and pH (5.0–5.8) sit comfortably in range."
      },
      {
        "name": "Sweet Potato",
        "score": 0.878,
        "reason": "Warm-season crop suits 288-day season; rainfall and pH (5.0–5.8) sit comfortably in range."
      },
      {
        "name": "Muscadine Grape",
        "score": 0.877,
        "reason": "Warm-season crop suits 288-day season; rainfall and pH (5.0–5.8) sit comfortably in range."
      },
      {
        "name": "Eggplant",
        "score": 0.846,
        "reason": "Warm-season crop suits 288-day season; 1245 mm rain and loamy sand soils are a solid match."
      },
      {
        "name": "Basil",
        "score": 0.824,
        "reason": "Warm-season crop suits 288-day season; 1245 mm rain and loamy sand soils are a solid match."
      },
      {
        "name": "Kale",
        "score": 0.821,
        "reason": "Cool-season crop fits frost window (Feb 20–Dec 5); 1245 mm rain and loamy sand soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.816,
        "reason": "Warm-season crop suits 288-day season; 1245 mm rain and loamy sand soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Columbus, GA",
    "lat": 32.461,
    "lon": -84.9877,
    "soil": {
      "mapUnitName": "Faceville sandy loam",
      "componentName": "Faceville",
      "texture": "Sandy loam",
      "drainage": "Well drained",
      "phLow": 5.1,
      "phHigh": 6
    },
    "climate": {
      "meanAnnualRainfallMm": 1220,
      "meanSummerHighC": 33.1,
      "meanWinterLowC": 3,
      "avgFirstFrost": "Nov 20",
      "avgLastFrost": "Mar 8",
      "growingSeasonDays": 257
    },
    "crops": [
      {
        "name": "Tomato",
        "score": 0.91,
        "reason": "Warm-season crop suits 257-day season; rainfall and pH (5.1–6.0) sit comfortably in range."
      },
      {
        "name": "Muscadine Grape",
        "score": 0.904,
        "reason": "Warm-season crop suits 257-day season; rainfall and pH (5.1–6.0) sit comfortably in range."
      },
      {
        "name": "Sweet Potato",
        "score": 0.875,
        "reason": "Warm-season crop suits 257-day season; rainfall and pH (5.1–6.0) sit comfortably in range."
      },
      {
        "name": "Blueberry",
        "score": 0.869,
        "reason": "Cool-season crop fits frost window (Mar 8–Nov 20); rainfall and pH (5.1–6.0) sit comfortably in range."
      },
      {
        "name": "Eggplant",
        "score": 0.839,
        "reason": "Warm-season crop suits 257-day season; 1220 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.829,
        "reason": "Warm-season crop suits 257-day season; 1220 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Okra",
        "score": 0.823,
        "reason": "Warm-season crop suits 257-day season; 1220 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Basil",
        "score": 0.822,
        "reason": "Warm-season crop suits 257-day season; 1220 mm rain and sandy loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Albany, GA",
    "lat": 31.5785,
    "lon": -84.1557,
    "soil": {
      "mapUnitName": "Tifton loamy sand",
      "componentName": "Tifton",
      "texture": "Loamy sand",
      "drainage": "Well drained",
      "phLow": 5,
      "phHigh": 5.7
    },
    "climate": {
      "meanAnnualRainfallMm": 1285,
      "meanSummerHighC": 33.5,
      "meanWinterLowC": 4.2,
      "avgFirstFrost": "Nov 25",
      "avgLastFrost": "Mar 1",
      "growingSeasonDays": 269
    },
    "crops": [
      {
        "name": "Tomato",
        "score": 0.885,
        "reason": "Warm-season crop suits 269-day season; rainfall and pH (5.0–5.7) sit comfortably in range."
      },
      {
        "name": "Blueberry",
        "score": 0.885,
        "reason": "Cool-season crop fits frost window (Mar 1–Nov 25); rainfall and pH (5.0–5.7) sit comfortably in range."
      },
      {
        "name": "Muscadine Grape",
        "score": 0.881,
        "reason": "Warm-season crop suits 269-day season; rainfall and pH (5.0–5.7) sit comfortably in range."
      },
      {
        "name": "Sweet Potato",
        "score": 0.851,
        "reason": "Warm-season crop suits 269-day season; rainfall and pH (5.0–5.7) sit comfortably in range."
      },
      {
        "name": "Eggplant",
        "score": 0.804,
        "reason": "Warm-season crop suits 269-day season; 1285 mm rain and loamy sand soils are a solid match."
      },
      {
        "name": "Kale",
        "score": 0.793,
        "reason": "Cool-season crop fits frost window (Mar 1–Nov 25); 1285 mm rain and loamy sand soils are a solid match."
      },
      {
        "name": "Basil",
        "score": 0.786,
        "reason": "Warm-season crop suits 269-day season; 1285 mm rain and loamy sand soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.786,
        "reason": "Warm-season crop suits 269-day season; 1285 mm rain and loamy sand soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Valdosta, GA",
    "lat": 30.8327,
    "lon": -83.2785,
    "soil": {
      "mapUnitName": "Fuquay loamy sand",
      "componentName": "Fuquay",
      "texture": "Loamy sand",
      "drainage": "Well drained",
      "phLow": 4.9,
      "phHigh": 5.6
    },
    "climate": {
      "meanAnnualRainfallMm": 1320,
      "meanSummerHighC": 33.2,
      "meanWinterLowC": 5.5,
      "avgFirstFrost": "Dec 1",
      "avgLastFrost": "Feb 22",
      "growingSeasonDays": 282
    },
    "crops": [
      {
        "name": "Blueberry",
        "score": 0.892,
        "reason": "Cool-season crop fits frost window (Feb 22–Dec 1); rainfall and pH (4.9–5.6) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.879,
        "reason": "Warm-season crop suits 282-day season; rainfall and pH (4.9–5.6) sit comfortably in range."
      },
      {
        "name": "Sweet Potato",
        "score": 0.849,
        "reason": "Warm-season crop suits 282-day season; 1320 mm rain and loamy sand soils are a solid match."
      },
      {
        "name": "Muscadine Grape",
        "score": 0.846,
        "reason": "Warm-season crop suits 282-day season; 1320 mm rain and loamy sand soils are a solid match."
      },
      {
        "name": "Eggplant",
        "score": 0.794,
        "reason": "Warm-season crop suits 282-day season; 1320 mm rain and loamy sand soils are a solid match."
      },
      {
        "name": "Kale",
        "score": 0.781,
        "reason": "Cool-season crop fits frost window (Feb 22–Dec 1); 1320 mm rain and loamy sand soils are a solid match."
      },
      {
        "name": "Basil",
        "score": 0.772,
        "reason": "Warm-season crop suits 282-day season; 1320 mm rain and loamy sand soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.763,
        "reason": "Warm-season crop suits 282-day season; 1320 mm rain and loamy sand soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Peachtree City, GA",
    "lat": 33.3968,
    "lon": -84.5957,
    "soil": {
      "mapUnitName": "Cecil sandy loam",
      "componentName": "Cecil",
      "texture": "Sandy loam",
      "drainage": "Well drained",
      "phLow": 5.2,
      "phHigh": 6
    },
    "climate": {
      "meanAnnualRainfallMm": 1275,
      "meanSummerHighC": 31.6,
      "meanWinterLowC": 1,
      "avgFirstFrost": "Nov 11",
      "avgLastFrost": "Mar 23",
      "growingSeasonDays": 233
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.901,
        "reason": "Warm-season crop suits 233-day season; rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Blueberry",
        "score": 0.873,
        "reason": "Cool-season crop fits frost window (Mar 23–Nov 11); rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.862,
        "reason": "Warm-season crop suits 233-day season; rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Sweet Potato",
        "score": 0.854,
        "reason": "Warm-season crop suits 233-day season; rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Kale",
        "score": 0.824,
        "reason": "Cool-season crop fits frost window (Mar 23–Nov 11); 1275 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Okra",
        "score": 0.81,
        "reason": "Warm-season crop suits 233-day season; 1275 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.809,
        "reason": "Warm-season crop suits 233-day season; 1275 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Strawberry",
        "score": 0.803,
        "reason": "Cool-season crop fits frost window (Mar 23–Nov 11); 1275 mm rain and sandy loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Kennesaw, GA",
    "lat": 34.0234,
    "lon": -84.6155,
    "soil": {
      "mapUnitName": "Madison clay loam",
      "componentName": "Madison",
      "texture": "Clay loam",
      "drainage": "Well drained",
      "phLow": 5.2,
      "phHigh": 6.1
    },
    "climate": {
      "meanAnnualRainfallMm": 1330,
      "meanSummerHighC": 30.7,
      "meanWinterLowC": 0.2,
      "avgFirstFrost": "Nov 6",
      "avgLastFrost": "Mar 29",
      "growingSeasonDays": 222
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.899,
        "reason": "Warm-season crop suits 222-day season; rainfall and pH (5.2–6.1) sit comfortably in range."
      },
      {
        "name": "Blueberry",
        "score": 0.864,
        "reason": "Cool-season crop fits frost window (Mar 29–Nov 6); rainfall and pH (5.2–6.1) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.847,
        "reason": "Warm-season crop suits 222-day season; 1330 mm rain and clay loam soils are a solid match."
      },
      {
        "name": "Sweet Potato",
        "score": 0.834,
        "reason": "Warm-season crop suits 222-day season; 1330 mm rain and clay loam soils are a solid match."
      },
      {
        "name": "Kale",
        "score": 0.821,
        "reason": "Cool-season crop fits frost window (Mar 29–Nov 6); 1330 mm rain and clay loam soils are a solid match."
      },
      {
        "name": "Strawberry",
        "score": 0.794,
        "reason": "Cool-season crop fits frost window (Mar 29–Nov 6); 1330 mm rain and clay loam soils are a solid match."
      },
      {
        "name": "Okra",
        "score": 0.793,
        "reason": "Warm-season crop suits 222-day season; 1330 mm rain and clay loam soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.789,
        "reason": "Warm-season crop suits 222-day season; 1330 mm rain and clay loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Newnan, GA",
    "lat": 33.3807,
    "lon": -84.7997,
    "soil": {
      "mapUnitName": "Cecil sandy clay loam",
      "componentName": "Cecil",
      "texture": "Sandy clay loam",
      "drainage": "Well drained",
      "phLow": 5.1,
      "phHigh": 5.9
    },
    "climate": {
      "meanAnnualRainfallMm": 1280,
      "meanSummerHighC": 31.8,
      "meanWinterLowC": 1.1,
      "avgFirstFrost": "Nov 12",
      "avgLastFrost": "Mar 22",
      "growingSeasonDays": 235
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.889,
        "reason": "Warm-season crop suits 235-day season; rainfall and pH (5.1–5.9) sit comfortably in range."
      },
      {
        "name": "Blueberry",
        "score": 0.881,
        "reason": "Cool-season crop fits frost window (Mar 22–Nov 12); rainfall and pH (5.1–5.9) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.855,
        "reason": "Warm-season crop suits 235-day season; rainfall and pH (5.1–5.9) sit comfortably in range."
      },
      {
        "name": "Sweet Potato",
        "score": 0.849,
        "reason": "Warm-season crop suits 235-day season; 1280 mm rain and sandy clay loam soils are a solid match."
      },
      {
        "name": "Kale",
        "score": 0.816,
        "reason": "Cool-season crop fits frost window (Mar 22–Nov 12); 1280 mm rain and sandy clay loam soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.794,
        "reason": "Warm-season crop suits 235-day season; 1280 mm rain and sandy clay loam soils are a solid match."
      },
      {
        "name": "Okra",
        "score": 0.793,
        "reason": "Warm-season crop suits 235-day season; 1280 mm rain and sandy clay loam soils are a solid match."
      },
      {
        "name": "Strawberry",
        "score": 0.787,
        "reason": "Cool-season crop fits frost window (Mar 22–Nov 12); 1280 mm rain and sandy clay loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Carrollton, GA",
    "lat": 33.5801,
    "lon": -85.0766,
    "soil": {
      "mapUnitName": "Pacolet sandy loam",
      "componentName": "Pacolet",
      "texture": "Sandy loam",
      "drainage": "Well drained",
      "phLow": 5,
      "phHigh": 5.8
    },
    "climate": {
      "meanAnnualRainfallMm": 1360,
      "meanSummerHighC": 31,
      "meanWinterLowC": 0.3,
      "avgFirstFrost": "Nov 7",
      "avgLastFrost": "Mar 27",
      "growingSeasonDays": 225
    },
    "crops": [
      {
        "name": "Blueberry",
        "score": 0.892,
        "reason": "Cool-season crop fits frost window (Mar 27–Nov 7); rainfall and pH (5.0–5.8) sit comfortably in range."
      },
      {
        "name": "Muscadine Grape",
        "score": 0.869,
        "reason": "Warm-season crop suits 225-day season; rainfall and pH (5.0–5.8) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.828,
        "reason": "Warm-season crop suits 225-day season; 1360 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Sweet Potato",
        "score": 0.817,
        "reason": "Warm-season crop suits 225-day season; 1360 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Kale",
        "score": 0.799,
        "reason": "Cool-season crop fits frost window (Mar 27–Nov 7); 1360 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Potato",
        "score": 0.752,
        "reason": "Cool-season crop fits frost window (Mar 27–Nov 7); 1360 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Strawberry",
        "score": 0.752,
        "reason": "Cool-season crop fits frost window (Mar 27–Nov 7); 1360 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.75,
        "reason": "Warm-season crop suits 225-day season; 1360 mm rain and sandy loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Duluth, GA",
    "lat": 34.0029,
    "lon": -84.1446,
    "soil": {
      "mapUnitName": "Cecil-Urban land complex",
      "componentName": "Cecil",
      "texture": "Sandy loam",
      "drainage": "Well drained",
      "phLow": 5.3,
      "phHigh": 6.2
    },
    "climate": {
      "meanAnnualRainfallMm": 1310,
      "meanSummerHighC": 30.8,
      "meanWinterLowC": 0.5,
      "avgFirstFrost": "Nov 8",
      "avgLastFrost": "Mar 27",
      "growingSeasonDays": 226
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.908,
        "reason": "Warm-season crop suits 226-day season; rainfall and pH (5.3–6.2) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.857,
        "reason": "Warm-season crop suits 226-day season; rainfall and pH (5.3–6.2) sit comfortably in range."
      },
      {
        "name": "Blueberry",
        "score": 0.849,
        "reason": "Cool-season crop fits frost window (Mar 27–Nov 8); 1310 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Sweet Potato",
        "score": 0.843,
        "reason": "Warm-season crop suits 226-day season; 1310 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Kale",
        "score": 0.829,
        "reason": "Cool-season crop fits frost window (Mar 27–Nov 8); 1310 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Okra",
        "score": 0.813,
        "reason": "Warm-season crop suits 226-day season; 1310 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Strawberry",
        "score": 0.808,
        "reason": "Cool-season crop fits frost window (Mar 27–Nov 8); 1310 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.805,
        "reason": "Warm-season crop suits 226-day season; 1310 mm rain and sandy loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Birmingham, AL",
    "lat": 33.5207,
    "lon": -86.8025,
    "soil": {
      "mapUnitName": "Nauvoo fine sandy loam",
      "componentName": "Nauvoo",
      "texture": "Fine sandy loam",
      "drainage": "Well drained",
      "phLow": 5,
      "phHigh": 5.8
    },
    "climate": {
      "meanAnnualRainfallMm": 1385,
      "meanSummerHighC": 32,
      "meanWinterLowC": 1,
      "avgFirstFrost": "Nov 10",
      "avgLastFrost": "Mar 25",
      "growingSeasonDays": 230
    },
    "crops": [
      {
        "name": "Blueberry",
        "score": 0.88,
        "reason": "Cool-season crop fits frost window (Mar 25–Nov 10); rainfall and pH (5.0–5.8) sit comfortably in range."
      },
      {
        "name": "Muscadine Grape",
        "score": 0.866,
        "reason": "Warm-season crop suits 230-day season; rainfall and pH (5.0–5.8) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.819,
        "reason": "Warm-season crop suits 230-day season; 1385 mm rain and fine sandy loam soils are a solid match."
      },
      {
        "name": "Sweet Potato",
        "score": 0.807,
        "reason": "Warm-season crop suits 230-day season; 1385 mm rain and fine sandy loam soils are a solid match."
      },
      {
        "name": "Kale",
        "score": 0.778,
        "reason": "Cool-season crop fits frost window (Mar 25–Nov 10); 1385 mm rain and fine sandy loam soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.739,
        "reason": "Warm-season crop suits 230-day season; 1385 mm rain and fine sandy loam soils are a solid match."
      },
      {
        "name": "Okra",
        "score": 0.738,
        "reason": "Warm-season crop suits 230-day season; 1385 mm rain and fine sandy loam soils are a solid match."
      },
      {
        "name": "Eggplant",
        "score": 0.735,
        "reason": "Warm-season crop suits 230-day season; 1385 mm rain and fine sandy loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Huntsville, AL",
    "lat": 34.7304,
    "lon": -86.5861,
    "soil": {
      "mapUnitName": "Decatur silt loam",
      "componentName": "Decatur",
      "texture": "Silt loam",
      "drainage": "Well drained",
      "phLow": 5.5,
      "phHigh": 6.5
    },
    "climate": {
      "meanAnnualRainfallMm": 1395,
      "meanSummerHighC": 31.5,
      "meanWinterLowC": -0.5,
      "avgFirstFrost": "Nov 3",
      "avgLastFrost": "Apr 2",
      "growingSeasonDays": 215
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.89,
        "reason": "Warm-season crop suits 215-day season; rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.824,
        "reason": "Warm-season crop suits 215-day season; 1395 mm rain and silt loam soils are a solid match."
      },
      {
        "name": "Sweet Potato",
        "score": 0.798,
        "reason": "Warm-season crop suits 215-day season; 1395 mm rain and silt loam soils are a solid match."
      },
      {
        "name": "Kale",
        "score": 0.793,
        "reason": "Cool-season crop fits frost window (Apr 2–Nov 3); 1395 mm rain and silt loam soils are a solid match."
      },
      {
        "name": "Okra",
        "score": 0.791,
        "reason": "Warm-season crop suits 215-day season; 1395 mm rain and silt loam soils are a solid match."
      },
      {
        "name": "Blueberry",
        "score": 0.782,
        "reason": "Cool-season crop fits frost window (Apr 2–Nov 3); 1395 mm rain and silt loam soils are a solid match."
      },
      {
        "name": "Sweet Corn",
        "score": 0.779,
        "reason": "Warm-season crop suits 215-day season; 1395 mm rain and silt loam soils are a solid match."
      },
      {
        "name": "Strawberry",
        "score": 0.776,
        "reason": "Cool-season crop fits frost window (Apr 2–Nov 3); 1395 mm rain and silt loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Chattanooga, TN",
    "lat": 35.0456,
    "lon": -85.3097,
    "soil": {
      "mapUnitName": "Fullerton cherty silt loam",
      "componentName": "Fullerton",
      "texture": "Silt loam",
      "drainage": "Well drained",
      "phLow": 5.2,
      "phHigh": 6
    },
    "climate": {
      "meanAnnualRainfallMm": 1355,
      "meanSummerHighC": 31.8,
      "meanWinterLowC": -0.2,
      "avgFirstFrost": "Nov 4",
      "avgLastFrost": "Apr 3",
      "growingSeasonDays": 215
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.887,
        "reason": "Warm-season crop suits 215-day season; rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Blueberry",
        "score": 0.861,
        "reason": "Cool-season crop fits frost window (Apr 3–Nov 4); rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.829,
        "reason": "Warm-season crop suits 215-day season; 1355 mm rain and silt loam soils are a solid match."
      },
      {
        "name": "Sweet Potato",
        "score": 0.817,
        "reason": "Warm-season crop suits 215-day season; 1355 mm rain and silt loam soils are a solid match."
      },
      {
        "name": "Kale",
        "score": 0.795,
        "reason": "Cool-season crop fits frost window (Apr 3–Nov 4); 1355 mm rain and silt loam soils are a solid match."
      },
      {
        "name": "Strawberry",
        "score": 0.783,
        "reason": "Cool-season crop fits frost window (Apr 3–Nov 4); 1355 mm rain and silt loam soils are a solid match."
      },
      {
        "name": "Okra",
        "score": 0.773,
        "reason": "Warm-season crop suits 215-day season; 1355 mm rain and silt loam soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.768,
        "reason": "Warm-season crop suits 215-day season; 1355 mm rain and silt loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Knoxville, TN",
    "lat": 35.9606,
    "lon": -83.9207,
    "soil": {
      "mapUnitName": "Sequoia silt loam",
      "componentName": "Sequoia",
      "texture": "Silt loam",
      "drainage": "Well drained",
      "phLow": 5.3,
      "phHigh": 6.2
    },
    "climate": {
      "meanAnnualRainfallMm": 1220,
      "meanSummerHighC": 30.8,
      "meanWinterLowC": -1,
      "avgFirstFrost": "Oct 30",
      "avgLastFrost": "Apr 8",
      "growingSeasonDays": 205
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.912,
        "reason": "Warm-season crop suits 205-day season; rainfall and pH (5.3–6.2) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.877,
        "reason": "Warm-season crop suits 205-day season; rainfall and pH (5.3–6.2) sit comfortably in range."
      },
      {
        "name": "Sweet Potato",
        "score": 0.866,
        "reason": "Warm-season crop suits 205-day season; rainfall and pH (5.3–6.2) sit comfortably in range."
      },
      {
        "name": "Strawberry",
        "score": 0.858,
        "reason": "Cool-season crop fits frost window (Apr 8–Oct 30); rainfall and pH (5.3–6.2) sit comfortably in range."
      },
      {
        "name": "Blueberry",
        "score": 0.857,
        "reason": "Cool-season crop fits frost window (Apr 8–Oct 30); rainfall and pH (5.3–6.2) sit comfortably in range."
      },
      {
        "name": "Kale",
        "score": 0.855,
        "reason": "Cool-season crop fits frost window (Apr 8–Oct 30); rainfall and pH (5.3–6.2) sit comfortably in range."
      },
      {
        "name": "Okra",
        "score": 0.836,
        "reason": "Warm-season crop suits 205-day season; 1220 mm rain and silt loam soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.834,
        "reason": "Warm-season crop suits 205-day season; 1220 mm rain and silt loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Nashville, TN",
    "lat": 36.1627,
    "lon": -86.7816,
    "soil": {
      "mapUnitName": "Maury silt loam",
      "componentName": "Maury",
      "texture": "Silt loam",
      "drainage": "Well drained",
      "phLow": 5.8,
      "phHigh": 6.8
    },
    "climate": {
      "meanAnnualRainfallMm": 1205,
      "meanSummerHighC": 31.5,
      "meanWinterLowC": -0.8,
      "avgFirstFrost": "Nov 1",
      "avgLastFrost": "Apr 5",
      "growingSeasonDays": 210
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.904,
        "reason": "Warm-season crop suits 210-day season; rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.888,
        "reason": "Warm-season crop suits 210-day season; rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Okra",
        "score": 0.863,
        "reason": "Warm-season crop suits 210-day season; rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Kale",
        "score": 0.859,
        "reason": "Cool-season crop fits frost window (Apr 5–Nov 1); rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Sweet Potato",
        "score": 0.857,
        "reason": "Warm-season crop suits 210-day season; rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Sweet Corn",
        "score": 0.856,
        "reason": "Warm-season crop suits 210-day season; rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Collard Greens",
        "score": 0.851,
        "reason": "Cool-season crop fits frost window (Apr 5–Nov 1); rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Strawberry",
        "score": 0.848,
        "reason": "Cool-season crop fits frost window (Apr 5–Nov 1); 1205 mm rain and silt loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Asheville, NC",
    "lat": 35.5951,
    "lon": -82.5515,
    "soil": {
      "mapUnitName": "Evard-Cowee complex",
      "componentName": "Evard",
      "texture": "Loam",
      "drainage": "Well drained",
      "phLow": 5,
      "phHigh": 5.8
    },
    "climate": {
      "meanAnnualRainfallMm": 1190,
      "meanSummerHighC": 28,
      "meanWinterLowC": -2.5,
      "avgFirstFrost": "Oct 20",
      "avgLastFrost": "Apr 20",
      "growingSeasonDays": 183
    },
    "crops": [
      {
        "name": "Blueberry",
        "score": 0.895,
        "reason": "Cool-season crop fits frost window (Apr 20–Oct 20); rainfall and pH (5.0–5.8) sit comfortably in range."
      },
      {
        "name": "Muscadine Grape",
        "score": 0.886,
        "reason": "Warm-season crop suits 183-day season; rainfall and pH (5.0–5.8) sit comfortably in range."
      },
      {
        "name": "Strawberry",
        "score": 0.869,
        "reason": "Cool-season crop fits frost window (Apr 20–Oct 20); rainfall and pH (5.0–5.8) sit comfortably in range."
      },
      {
        "name": "Kale",
        "score": 0.863,
        "reason": "Cool-season crop fits frost window (Apr 20–Oct 20); rainfall and pH (5.0–5.8) sit comfortably in range."
      },
      {
        "name": "Mustard Greens",
        "score": 0.862,
        "reason": "Cool-season crop fits frost window (Apr 20–Oct 20); rainfall and pH (5.0–5.8) sit comfortably in range."
      },
      {
        "name": "Potato",
        "score": 0.852,
        "reason": "Cool-season crop fits frost window (Apr 20–Oct 20); rainfall and pH (5.0–5.8) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.841,
        "reason": "Warm-season crop suits 183-day season; 1190 mm rain and loam soils are a solid match."
      },
      {
        "name": "Sweet Potato",
        "score": 0.838,
        "reason": "Warm-season crop suits 183-day season; 1190 mm rain and loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Charlotte, NC",
    "lat": 35.2271,
    "lon": -80.8431,
    "soil": {
      "mapUnitName": "Cecil sandy clay loam",
      "componentName": "Cecil",
      "texture": "Sandy clay loam",
      "drainage": "Well drained",
      "phLow": 5.2,
      "phHigh": 6
    },
    "climate": {
      "meanAnnualRainfallMm": 1105,
      "meanSummerHighC": 31.5,
      "meanWinterLowC": 0.5,
      "avgFirstFrost": "Nov 8",
      "avgLastFrost": "Mar 28",
      "growingSeasonDays": 225
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.918,
        "reason": "Warm-season crop suits 225-day season; rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Blueberry",
        "score": 0.892,
        "reason": "Cool-season crop fits frost window (Mar 28–Nov 8); rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Peanut",
        "score": 0.877,
        "reason": "Warm-season crop suits 225-day season; rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Strawberry",
        "score": 0.874,
        "reason": "Cool-season crop fits frost window (Mar 28–Nov 8); rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Sweet Corn",
        "score": 0.862,
        "reason": "Warm-season crop suits 225-day season; rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.854,
        "reason": "Warm-season crop suits 225-day season; rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Eggplant",
        "score": 0.854,
        "reason": "Warm-season crop suits 225-day season; rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Sweet Potato",
        "score": 0.851,
        "reason": "Warm-season crop suits 225-day season; rainfall and pH (5.2–6.0) sit comfortably in range."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Raleigh, NC",
    "lat": 35.7796,
    "lon": -78.6382,
    "soil": {
      "mapUnitName": "Appling sandy loam",
      "componentName": "Appling",
      "texture": "Sandy loam",
      "drainage": "Well drained",
      "phLow": 5.1,
      "phHigh": 5.9
    },
    "climate": {
      "meanAnnualRainfallMm": 1160,
      "meanSummerHighC": 31.8,
      "meanWinterLowC": 0.8,
      "avgFirstFrost": "Nov 10",
      "avgLastFrost": "Mar 25",
      "growingSeasonDays": 230
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.901,
        "reason": "Warm-season crop suits 230-day season; rainfall and pH (5.1–5.9) sit comfortably in range."
      },
      {
        "name": "Blueberry",
        "score": 0.894,
        "reason": "Cool-season crop fits frost window (Mar 25–Nov 10); rainfall and pH (5.1–5.9) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.845,
        "reason": "Warm-season crop suits 230-day season; 1160 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Sweet Potato",
        "score": 0.843,
        "reason": "Warm-season crop suits 230-day season; 1160 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.843,
        "reason": "Warm-season crop suits 230-day season; 1160 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Strawberry",
        "score": 0.836,
        "reason": "Cool-season crop fits frost window (Mar 25–Nov 10); 1160 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Sweet Corn",
        "score": 0.827,
        "reason": "Warm-season crop suits 230-day season; 1160 mm rain and sandy loam soils are a solid match."
      },
      {
        "name": "Eggplant",
        "score": 0.826,
        "reason": "Warm-season crop suits 230-day season; 1160 mm rain and sandy loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Charleston, SC",
    "lat": 32.7765,
    "lon": -79.9311,
    "soil": {
      "mapUnitName": "Yonges loamy fine sand",
      "componentName": "Yonges",
      "texture": "Loamy fine sand",
      "drainage": "Poorly drained",
      "phLow": 5,
      "phHigh": 6
    },
    "climate": {
      "meanAnnualRainfallMm": 1295,
      "meanSummerHighC": 32,
      "meanWinterLowC": 5.5,
      "avgFirstFrost": "Dec 8",
      "avgLastFrost": "Feb 18",
      "growingSeasonDays": 293
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.88,
        "reason": "Warm-season crop suits 293-day season; rainfall and pH (5.0–6.0) sit comfortably in range."
      },
      {
        "name": "Blueberry",
        "score": 0.878,
        "reason": "Cool-season crop fits frost window (Feb 18–Dec 8); rainfall and pH (5.0–6.0) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.871,
        "reason": "Warm-season crop suits 293-day season; rainfall and pH (5.0–6.0) sit comfortably in range."
      },
      {
        "name": "Sweet Potato",
        "score": 0.867,
        "reason": "Warm-season crop suits 293-day season; rainfall and pH (5.0–6.0) sit comfortably in range."
      },
      {
        "name": "Kale",
        "score": 0.812,
        "reason": "Cool-season crop fits frost window (Feb 18–Dec 8); 1295 mm rain and loamy fine sand soils are a solid match."
      },
      {
        "name": "Okra",
        "score": 0.807,
        "reason": "Warm-season crop suits 293-day season; 1295 mm rain and loamy fine sand soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.806,
        "reason": "Warm-season crop suits 293-day season; 1295 mm rain and loamy fine sand soils are a solid match."
      },
      {
        "name": "Eggplant",
        "score": 0.799,
        "reason": "Warm-season crop suits 293-day season; 1295 mm rain and loamy fine sand soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Greenville, SC",
    "lat": 34.8526,
    "lon": -82.394,
    "soil": {
      "mapUnitName": "Cecil sandy clay loam",
      "componentName": "Cecil",
      "texture": "Sandy clay loam",
      "drainage": "Well drained",
      "phLow": 5.2,
      "phHigh": 6
    },
    "climate": {
      "meanAnnualRainfallMm": 1265,
      "meanSummerHighC": 31.2,
      "meanWinterLowC": 0.5,
      "avgFirstFrost": "Nov 6",
      "avgLastFrost": "Mar 30",
      "growingSeasonDays": 221
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.902,
        "reason": "Warm-season crop suits 221-day season; rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Blueberry",
        "score": 0.878,
        "reason": "Cool-season crop fits frost window (Mar 30–Nov 6); rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.864,
        "reason": "Warm-season crop suits 221-day season; rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Sweet Potato",
        "score": 0.857,
        "reason": "Warm-season crop suits 221-day season; rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Kale",
        "score": 0.832,
        "reason": "Cool-season crop fits frost window (Mar 30–Nov 6); 1265 mm rain and sandy clay loam soils are a solid match."
      },
      {
        "name": "Okra",
        "score": 0.812,
        "reason": "Warm-season crop suits 221-day season; 1265 mm rain and sandy clay loam soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.812,
        "reason": "Warm-season crop suits 221-day season; 1265 mm rain and sandy clay loam soils are a solid match."
      },
      {
        "name": "Strawberry",
        "score": 0.812,
        "reason": "Cool-season crop fits frost window (Mar 30–Nov 6); 1265 mm rain and sandy clay loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Jacksonville, FL",
    "lat": 30.3322,
    "lon": -81.6557,
    "soil": {
      "mapUnitName": "Leon fine sand",
      "componentName": "Leon",
      "texture": "Fine sand",
      "drainage": "Poorly drained",
      "phLow": 4.5,
      "phHigh": 5.5
    },
    "climate": {
      "meanAnnualRainfallMm": 1325,
      "meanSummerHighC": 32.5,
      "meanWinterLowC": 7,
      "avgFirstFrost": "Dec 20",
      "avgLastFrost": "Feb 5",
      "growingSeasonDays": 318
    },
    "crops": [
      {
        "name": "Blueberry",
        "score": 0.895,
        "reason": "Cool-season crop fits frost window (Feb 5–Dec 20); rainfall and pH (4.5–5.5) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.87,
        "reason": "Warm-season crop suits 318-day season; rainfall and pH (4.5–5.5) sit comfortably in range."
      },
      {
        "name": "Sweet Potato",
        "score": 0.843,
        "reason": "Warm-season crop suits 318-day season; 1325 mm rain and fine sand soils are a solid match."
      },
      {
        "name": "Muscadine Grape",
        "score": 0.793,
        "reason": "Warm-season crop suits 318-day season; 1325 mm rain and fine sand soils are a solid match."
      },
      {
        "name": "Eggplant",
        "score": 0.779,
        "reason": "Warm-season crop suits 318-day season; 1325 mm rain and fine sand soils are a solid match."
      },
      {
        "name": "Kale",
        "score": 0.765,
        "reason": "Cool-season crop fits frost window (Feb 5–Dec 20); 1325 mm rain and fine sand soils are a solid match."
      },
      {
        "name": "Basil",
        "score": 0.753,
        "reason": "Warm-season crop suits 318-day season; 1325 mm rain and fine sand soils are a solid match."
      },
      {
        "name": "Bell Pepper",
        "score": 0.73,
        "reason": "Warm-season crop suits 318-day season; 1325 mm rain and fine sand soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Tampa, FL",
    "lat": 27.9506,
    "lon": -82.4572,
    "soil": {
      "mapUnitName": "Myakka fine sand",
      "componentName": "Myakka",
      "texture": "Fine sand",
      "drainage": "Poorly drained",
      "phLow": 4.8,
      "phHigh": 5.8
    },
    "climate": {
      "meanAnnualRainfallMm": 1180,
      "meanSummerHighC": 32.8,
      "meanWinterLowC": 11,
      "avgFirstFrost": "Jan 15",
      "avgLastFrost": "Jan 20",
      "growingSeasonDays": 350
    },
    "crops": [
      {
        "name": "Blueberry",
        "score": 0.907,
        "reason": "Cool-season crop fits frost window (Jan 20–Jan 15); rainfall and pH (4.8–5.8) sit comfortably in range."
      },
      {
        "name": "Sweet Potato",
        "score": 0.892,
        "reason": "Warm-season crop suits 350-day season; rainfall and pH (4.8–5.8) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.891,
        "reason": "Warm-season crop suits 350-day season; rainfall and pH (4.8–5.8) sit comfortably in range."
      },
      {
        "name": "Eggplant",
        "score": 0.887,
        "reason": "Warm-season crop suits 350-day season; rainfall and pH (4.8–5.8) sit comfortably in range."
      },
      {
        "name": "Muscadine Grape",
        "score": 0.867,
        "reason": "Warm-season crop suits 350-day season; rainfall and pH (4.8–5.8) sit comfortably in range."
      },
      {
        "name": "Peanut",
        "score": 0.851,
        "reason": "Warm-season crop suits 350-day season; rainfall and pH (4.8–5.8) sit comfortably in range."
      },
      {
        "name": "Bell Pepper",
        "score": 0.843,
        "reason": "Warm-season crop suits 350-day season; 1180 mm rain and fine sand soils are a solid match."
      },
      {
        "name": "Cucumber",
        "score": 0.843,
        "reason": "Warm-season crop suits 350-day season; 1180 mm rain and fine sand soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Orlando, FL",
    "lat": 28.5383,
    "lon": -81.3792,
    "soil": {
      "mapUnitName": "Tavares fine sand",
      "componentName": "Tavares",
      "texture": "Fine sand",
      "drainage": "Moderately well drained",
      "phLow": 5,
      "phHigh": 6
    },
    "climate": {
      "meanAnnualRainfallMm": 1305,
      "meanSummerHighC": 33,
      "meanWinterLowC": 10,
      "avgFirstFrost": "Jan 5",
      "avgLastFrost": "Jan 25",
      "growingSeasonDays": 345
    },
    "crops": [
      {
        "name": "Tomato",
        "score": 0.9,
        "reason": "Warm-season crop suits 345-day season; rainfall and pH (5.0–6.0) sit comfortably in range."
      },
      {
        "name": "Sweet Potato",
        "score": 0.885,
        "reason": "Warm-season crop suits 345-day season; rainfall and pH (5.0–6.0) sit comfortably in range."
      },
      {
        "name": "Muscadine Grape",
        "score": 0.881,
        "reason": "Warm-season crop suits 345-day season; rainfall and pH (5.0–6.0) sit comfortably in range."
      },
      {
        "name": "Blueberry",
        "score": 0.872,
        "reason": "Cool-season crop fits frost window (Jan 25–Jan 5); rainfall and pH (5.0–6.0) sit comfortably in range."
      },
      {
        "name": "Eggplant",
        "score": 0.846,
        "reason": "Warm-season crop suits 345-day season; 1305 mm rain and fine sand soils are a solid match."
      },
      {
        "name": "Okra",
        "score": 0.825,
        "reason": "Warm-season crop suits 345-day season; 1305 mm rain and fine sand soils are a solid match."
      },
      {
        "name": "Peanut",
        "score": 0.822,
        "reason": "Warm-season crop suits 345-day season; 1305 mm rain and fine sand soils are a solid match."
      },
      {
        "name": "Sweet Corn",
        "score": 0.806,
        "reason": "Warm-season crop suits 345-day season; 1305 mm rain and fine sand soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Miami, FL",
    "lat": 25.7617,
    "lon": -80.1918,
    "soil": {
      "mapUnitName": "Perrine marl",
      "componentName": "Perrine",
      "texture": "Marl",
      "drainage": "Poorly drained",
      "phLow": 7.2,
      "phHigh": 8
    },
    "climate": {
      "meanAnnualRainfallMm": 1570,
      "meanSummerHighC": 32.5,
      "meanWinterLowC": 16.5,
      "avgFirstFrost": "—",
      "avgLastFrost": "—",
      "growingSeasonDays": 365
    },
    "crops": [
      {
        "name": "Tomato",
        "score": 0.837,
        "reason": "Warm-season crop suits 365-day season; 1570 mm rain and marl soils are a solid match."
      },
      {
        "name": "Kale",
        "score": 0.721,
        "reason": "Cool-season crop fits frost window (—–—); 1570 mm rain and marl soils are a solid match."
      },
      {
        "name": "Collard Greens",
        "score": 0.715,
        "reason": "Cool-season crop fits frost window (—–—); 1570 mm rain and marl soils are a solid match."
      },
      {
        "name": "Zucchini",
        "score": 0.707,
        "reason": "Warm-season crop suits 365-day season; 1570 mm rain and marl soils are a solid match."
      },
      {
        "name": "Summer Squash",
        "score": 0.707,
        "reason": "Warm-season crop suits 365-day season; 1570 mm rain and marl soils are a solid match."
      },
      {
        "name": "Okra",
        "score": 0.7,
        "reason": "Warm-season crop suits 365-day season; 1570 mm rain and marl soils are a solid match."
      },
      {
        "name": "Eggplant",
        "score": 0.698,
        "reason": "Warm-season crop suits 365-day season; 1570 mm rain and marl soils are a solid match."
      },
      {
        "name": "Fig",
        "score": 0.687,
        "reason": "Warm-season crop suits 365-day season; 1570 mm rain and marl soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "New Orleans, LA",
    "lat": 29.9511,
    "lon": -90.0715,
    "soil": {
      "mapUnitName": "Sharkey clay",
      "componentName": "Sharkey",
      "texture": "Clay",
      "drainage": "Poorly drained",
      "phLow": 6,
      "phHigh": 7.2
    },
    "climate": {
      "meanAnnualRainfallMm": 1590,
      "meanSummerHighC": 32.5,
      "meanWinterLowC": 7.5,
      "avgFirstFrost": "Dec 15",
      "avgLastFrost": "Feb 10",
      "growingSeasonDays": 308
    },
    "crops": [
      {
        "name": "Tomato",
        "score": 0.844,
        "reason": "Warm-season crop suits 308-day season; 1590 mm rain and clay soils are a solid match."
      },
      {
        "name": "Muscadine Grape",
        "score": 0.821,
        "reason": "Warm-season crop suits 308-day season; 1590 mm rain and clay soils are a solid match."
      },
      {
        "name": "Okra",
        "score": 0.768,
        "reason": "Warm-season crop suits 308-day season; 1590 mm rain and clay soils are a solid match."
      },
      {
        "name": "Soybean",
        "score": 0.767,
        "reason": "Warm-season crop suits 308-day season; 1590 mm rain and clay soils are a solid match."
      },
      {
        "name": "Eggplant",
        "score": 0.75,
        "reason": "Warm-season crop suits 308-day season; 1590 mm rain and clay soils are a solid match."
      },
      {
        "name": "Sweet Corn",
        "score": 0.744,
        "reason": "Warm-season crop suits 308-day season; 1590 mm rain and clay soils are a solid match."
      },
      {
        "name": "Sweet Potato",
        "score": 0.74,
        "reason": "Warm-season crop suits 308-day season; 1590 mm rain and clay soils are a solid match."
      },
      {
        "name": "Kale",
        "score": 0.736,
        "reason": "Cool-season crop fits frost window (Feb 10–Dec 15); 1590 mm rain and clay soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "New York, NY",
    "lat": 40.7128,
    "lon": -74.006,
    "soil": {
      "mapUnitName": "Urban land-Flatbush complex",
      "componentName": "Flatbush",
      "texture": "Sandy loam",
      "drainage": "Well drained",
      "phLow": 5.8,
      "phHigh": 6.8
    },
    "climate": {
      "meanAnnualRainfallMm": 1200,
      "meanSummerHighC": 28.5,
      "meanWinterLowC": -2.5,
      "avgFirstFrost": "Nov 5",
      "avgLastFrost": "Apr 10",
      "growingSeasonDays": 209
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.908,
        "reason": "Warm-season crop suits 209-day season; rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Strawberry",
        "score": 0.883,
        "reason": "Cool-season crop fits frost window (Apr 10–Nov 5); rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Kale",
        "score": 0.876,
        "reason": "Cool-season crop fits frost window (Apr 10–Nov 5); rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Swiss Chard",
        "score": 0.876,
        "reason": "Cool-season crop fits frost window (Apr 10–Nov 5); rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Mustard Greens",
        "score": 0.875,
        "reason": "Cool-season crop fits frost window (Apr 10–Nov 5); rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Collard Greens",
        "score": 0.868,
        "reason": "Cool-season crop fits frost window (Apr 10–Nov 5); rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Sweet Corn",
        "score": 0.863,
        "reason": "Warm-season crop suits 209-day season; rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.858,
        "reason": "Warm-season crop suits 209-day season; rainfall and pH (5.8–6.8) sit comfortably in range."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Boston, MA",
    "lat": 42.3601,
    "lon": -71.0589,
    "soil": {
      "mapUnitName": "Newport silt loam",
      "componentName": "Newport",
      "texture": "Silt loam",
      "drainage": "Well drained",
      "phLow": 5.5,
      "phHigh": 6.5
    },
    "climate": {
      "meanAnnualRainfallMm": 1110,
      "meanSummerHighC": 27,
      "meanWinterLowC": -5,
      "avgFirstFrost": "Oct 25",
      "avgLastFrost": "Apr 20",
      "growingSeasonDays": 188
    },
    "crops": [
      {
        "name": "Strawberry",
        "score": 0.934,
        "reason": "Cool-season crop fits frost window (Apr 20–Oct 25); rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Muscadine Grape",
        "score": 0.918,
        "reason": "Warm-season crop suits 188-day season; rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Mustard Greens",
        "score": 0.914,
        "reason": "Cool-season crop fits frost window (Apr 20–Oct 25); rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Potato",
        "score": 0.887,
        "reason": "Cool-season crop fits frost window (Apr 20–Oct 25); rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Sweet Corn",
        "score": 0.886,
        "reason": "Warm-season crop suits 188-day season; rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Kale",
        "score": 0.886,
        "reason": "Cool-season crop fits frost window (Apr 20–Oct 25); rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Cabbage",
        "score": 0.886,
        "reason": "Cool-season crop fits frost window (Apr 20–Oct 25); rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Broccoli",
        "score": 0.878,
        "reason": "Cool-season crop fits frost window (Apr 20–Oct 25); rainfall and pH (5.5–6.5) sit comfortably in range."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Philadelphia, PA",
    "lat": 39.9526,
    "lon": -75.1652,
    "soil": {
      "mapUnitName": "Urban land-Chester complex",
      "componentName": "Chester",
      "texture": "Silt loam",
      "drainage": "Well drained",
      "phLow": 5.6,
      "phHigh": 6.6
    },
    "climate": {
      "meanAnnualRainfallMm": 1055,
      "meanSummerHighC": 29.5,
      "meanWinterLowC": -2,
      "avgFirstFrost": "Nov 2",
      "avgLastFrost": "Apr 8",
      "growingSeasonDays": 208
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.929,
        "reason": "Warm-season crop suits 208-day season; rainfall and pH (5.6–6.6) sit comfortably in range."
      },
      {
        "name": "Swiss Chard",
        "score": 0.916,
        "reason": "Cool-season crop fits frost window (Apr 8–Nov 2); rainfall and pH (5.6–6.6) sit comfortably in range."
      },
      {
        "name": "Fig",
        "score": 0.896,
        "reason": "Warm-season crop suits 208-day season; rainfall and pH (5.6–6.6) sit comfortably in range."
      },
      {
        "name": "Strawberry",
        "score": 0.888,
        "reason": "Cool-season crop fits frost window (Apr 8–Nov 2); rainfall and pH (5.6–6.6) sit comfortably in range."
      },
      {
        "name": "Turnip",
        "score": 0.876,
        "reason": "Cool-season crop fits frost window (Apr 8–Nov 2); rainfall and pH (5.6–6.6) sit comfortably in range."
      },
      {
        "name": "Kale",
        "score": 0.874,
        "reason": "Cool-season crop fits frost window (Apr 8–Nov 2); rainfall and pH (5.6–6.6) sit comfortably in range."
      },
      {
        "name": "Basil",
        "score": 0.867,
        "reason": "Warm-season crop suits 208-day season; rainfall and pH (5.6–6.6) sit comfortably in range."
      },
      {
        "name": "Sweet Corn",
        "score": 0.866,
        "reason": "Warm-season crop suits 208-day season; rainfall and pH (5.6–6.6) sit comfortably in range."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Washington, DC",
    "lat": 38.9072,
    "lon": -77.0369,
    "soil": {
      "mapUnitName": "Urban land-Christiana complex",
      "componentName": "Christiana",
      "texture": "Silt loam",
      "drainage": "Moderately well drained",
      "phLow": 5.5,
      "phHigh": 6.5
    },
    "climate": {
      "meanAnnualRainfallMm": 1040,
      "meanSummerHighC": 30.5,
      "meanWinterLowC": -0.5,
      "avgFirstFrost": "Nov 5",
      "avgLastFrost": "Apr 5",
      "growingSeasonDays": 214
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.93,
        "reason": "Warm-season crop suits 214-day season; rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Swiss Chard",
        "score": 0.909,
        "reason": "Cool-season crop fits frost window (Apr 5–Nov 5); rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Fig",
        "score": 0.898,
        "reason": "Warm-season crop suits 214-day season; rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Strawberry",
        "score": 0.882,
        "reason": "Cool-season crop fits frost window (Apr 5–Nov 5); rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Green Bean",
        "score": 0.875,
        "reason": "Warm-season crop suits 214-day season; rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Basil",
        "score": 0.875,
        "reason": "Warm-season crop suits 214-day season; rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.867,
        "reason": "Warm-season crop suits 214-day season; rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Sweet Corn",
        "score": 0.866,
        "reason": "Warm-season crop suits 214-day season; rainfall and pH (5.5–6.5) sit comfortably in range."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Baltimore, MD",
    "lat": 39.2904,
    "lon": -76.6122,
    "soil": {
      "mapUnitName": "Joppa gravelly sandy loam",
      "componentName": "Joppa",
      "texture": "Gravelly sandy loam",
      "drainage": "Well drained",
      "phLow": 5.4,
      "phHigh": 6.4
    },
    "climate": {
      "meanAnnualRainfallMm": 1065,
      "meanSummerHighC": 30,
      "meanWinterLowC": -1,
      "avgFirstFrost": "Nov 3",
      "avgLastFrost": "Apr 7",
      "growingSeasonDays": 210
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.93,
        "reason": "Warm-season crop suits 210-day season; rainfall and pH (5.4–6.4) sit comfortably in range."
      },
      {
        "name": "Swiss Chard",
        "score": 0.895,
        "reason": "Cool-season crop fits frost window (Apr 7–Nov 3); rainfall and pH (5.4–6.4) sit comfortably in range."
      },
      {
        "name": "Strawberry",
        "score": 0.885,
        "reason": "Cool-season crop fits frost window (Apr 7–Nov 3); rainfall and pH (5.4–6.4) sit comfortably in range."
      },
      {
        "name": "Fig",
        "score": 0.879,
        "reason": "Warm-season crop suits 210-day season; rainfall and pH (5.4–6.4) sit comfortably in range."
      },
      {
        "name": "Basil",
        "score": 0.864,
        "reason": "Warm-season crop suits 210-day season; rainfall and pH (5.4–6.4) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.863,
        "reason": "Warm-season crop suits 210-day season; rainfall and pH (5.4–6.4) sit comfortably in range."
      },
      {
        "name": "Carrot",
        "score": 0.858,
        "reason": "Cool-season crop fits frost window (Apr 7–Nov 3); rainfall and pH (5.4–6.4) sit comfortably in range."
      },
      {
        "name": "Sweet Corn",
        "score": 0.856,
        "reason": "Warm-season crop suits 210-day season; rainfall and pH (5.4–6.4) sit comfortably in range."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Richmond, VA",
    "lat": 37.5407,
    "lon": -77.436,
    "soil": {
      "mapUnitName": "Cecil fine sandy loam",
      "componentName": "Cecil",
      "texture": "Fine sandy loam",
      "drainage": "Well drained",
      "phLow": 5.2,
      "phHigh": 6
    },
    "climate": {
      "meanAnnualRainfallMm": 1115,
      "meanSummerHighC": 31,
      "meanWinterLowC": -0.2,
      "avgFirstFrost": "Nov 6",
      "avgLastFrost": "Apr 2",
      "growingSeasonDays": 218
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.916,
        "reason": "Warm-season crop suits 218-day season; rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Blueberry",
        "score": 0.895,
        "reason": "Cool-season crop fits frost window (Apr 2–Nov 6); rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Strawberry",
        "score": 0.893,
        "reason": "Cool-season crop fits frost window (Apr 2–Nov 6); rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Peanut",
        "score": 0.872,
        "reason": "Warm-season crop suits 218-day season; rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Sweet Corn",
        "score": 0.857,
        "reason": "Warm-season crop suits 218-day season; rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.852,
        "reason": "Warm-season crop suits 218-day season; rainfall and pH (5.2–6.0) sit comfortably in range."
      },
      {
        "name": "Potato",
        "score": 0.85,
        "reason": "Cool-season crop fits frost window (Apr 2–Nov 6); 1115 mm rain and fine sandy loam soils are a solid match."
      },
      {
        "name": "Sweet Potato",
        "score": 0.849,
        "reason": "Warm-season crop suits 218-day season; 1115 mm rain and fine sandy loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Chicago, IL",
    "lat": 41.8781,
    "lon": -87.6298,
    "soil": {
      "mapUnitName": "Urban land-Orthents complex",
      "componentName": "Orthents",
      "texture": "Clay loam",
      "drainage": "Somewhat poorly drained",
      "phLow": 6.2,
      "phHigh": 7.2
    },
    "climate": {
      "meanAnnualRainfallMm": 935,
      "meanSummerHighC": 28.5,
      "meanWinterLowC": -7.5,
      "avgFirstFrost": "Oct 20",
      "avgLastFrost": "Apr 25",
      "growingSeasonDays": 178
    },
    "crops": [
      {
        "name": "Swiss Chard",
        "score": 0.914,
        "reason": "Cool-season crop fits frost window (Apr 25–Oct 20); rainfall and pH (6.2–7.2) sit comfortably in range."
      },
      {
        "name": "Garlic",
        "score": 0.901,
        "reason": "Cool-season crop fits frost window (Apr 25–Oct 20); rainfall and pH (6.2–7.2) sit comfortably in range."
      },
      {
        "name": "Asparagus",
        "score": 0.901,
        "reason": "Cool-season crop fits frost window (Apr 25–Oct 20); rainfall and pH (6.2–7.2) sit comfortably in range."
      },
      {
        "name": "Fig",
        "score": 0.887,
        "reason": "Warm-season crop suits 178-day season; rainfall and pH (6.2–7.2) sit comfortably in range."
      },
      {
        "name": "Kale",
        "score": 0.877,
        "reason": "Cool-season crop fits frost window (Apr 25–Oct 20); rainfall and pH (6.2–7.2) sit comfortably in range."
      },
      {
        "name": "Collard Greens",
        "score": 0.874,
        "reason": "Cool-season crop fits frost window (Apr 25–Oct 20); rainfall and pH (6.2–7.2) sit comfortably in range."
      },
      {
        "name": "Onion",
        "score": 0.863,
        "reason": "Cool-season crop fits frost window (Apr 25–Oct 20); rainfall and pH (6.2–7.2) sit comfortably in range."
      },
      {
        "name": "Mustard Greens",
        "score": 0.862,
        "reason": "Cool-season crop fits frost window (Apr 25–Oct 20); rainfall and pH (6.2–7.2) sit comfortably in range."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Detroit, MI",
    "lat": 42.3314,
    "lon": -83.0458,
    "soil": {
      "mapUnitName": "Urban land-Spinks complex",
      "componentName": "Spinks",
      "texture": "Loamy sand",
      "drainage": "Well drained",
      "phLow": 5.8,
      "phHigh": 6.8
    },
    "climate": {
      "meanAnnualRainfallMm": 845,
      "meanSummerHighC": 28,
      "meanWinterLowC": -6.5,
      "avgFirstFrost": "Oct 18",
      "avgLastFrost": "Apr 28",
      "growingSeasonDays": 173
    },
    "crops": [
      {
        "name": "Strawberry",
        "score": 0.907,
        "reason": "Cool-season crop fits frost window (Apr 28–Oct 18); rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Fig",
        "score": 0.898,
        "reason": "Warm-season crop suits 173-day season; rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Kale",
        "score": 0.897,
        "reason": "Cool-season crop fits frost window (Apr 28–Oct 18); rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Garlic",
        "score": 0.894,
        "reason": "Cool-season crop fits frost window (Apr 28–Oct 18); rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Collard Greens",
        "score": 0.889,
        "reason": "Cool-season crop fits frost window (Apr 28–Oct 18); rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Mustard Greens",
        "score": 0.889,
        "reason": "Cool-season crop fits frost window (Apr 28–Oct 18); rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Swiss Chard",
        "score": 0.888,
        "reason": "Cool-season crop fits frost window (Apr 28–Oct 18); rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Muscadine Grape",
        "score": 0.888,
        "reason": "Warm-season crop suits 173-day season; rainfall and pH (5.8–6.8) sit comfortably in range."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Columbus, OH",
    "lat": 39.9612,
    "lon": -82.9988,
    "soil": {
      "mapUnitName": "Crosby silt loam",
      "componentName": "Crosby",
      "texture": "Silt loam",
      "drainage": "Somewhat poorly drained",
      "phLow": 6,
      "phHigh": 7
    },
    "climate": {
      "meanAnnualRainfallMm": 1005,
      "meanSummerHighC": 29,
      "meanWinterLowC": -5,
      "avgFirstFrost": "Oct 22",
      "avgLastFrost": "Apr 20",
      "growingSeasonDays": 185
    },
    "crops": [
      {
        "name": "Swiss Chard",
        "score": 0.943,
        "reason": "Cool-season crop fits frost window (Apr 20–Oct 22); rainfall and pH (6.0–7.0) sit comfortably in range."
      },
      {
        "name": "Fig",
        "score": 0.919,
        "reason": "Warm-season crop suits 185-day season; rainfall and pH (6.0–7.0) sit comfortably in range."
      },
      {
        "name": "Asparagus",
        "score": 0.915,
        "reason": "Cool-season crop fits frost window (Apr 20–Oct 22); rainfall and pH (6.0–7.0) sit comfortably in range."
      },
      {
        "name": "Muscadine Grape",
        "score": 0.889,
        "reason": "Warm-season crop suits 185-day season; rainfall and pH (6.0–7.0) sit comfortably in range."
      },
      {
        "name": "Turnip",
        "score": 0.887,
        "reason": "Cool-season crop fits frost window (Apr 20–Oct 22); rainfall and pH (6.0–7.0) sit comfortably in range."
      },
      {
        "name": "Carrot",
        "score": 0.878,
        "reason": "Cool-season crop fits frost window (Apr 20–Oct 22); rainfall and pH (6.0–7.0) sit comfortably in range."
      },
      {
        "name": "Beet",
        "score": 0.878,
        "reason": "Cool-season crop fits frost window (Apr 20–Oct 22); rainfall and pH (6.0–7.0) sit comfortably in range."
      },
      {
        "name": "Kale",
        "score": 0.876,
        "reason": "Cool-season crop fits frost window (Apr 20–Oct 22); rainfall and pH (6.0–7.0) sit comfortably in range."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Indianapolis, IN",
    "lat": 39.7684,
    "lon": -86.1581,
    "soil": {
      "mapUnitName": "Miami silt loam",
      "componentName": "Miami",
      "texture": "Silt loam",
      "drainage": "Moderately well drained",
      "phLow": 6,
      "phHigh": 7
    },
    "climate": {
      "meanAnnualRainfallMm": 1065,
      "meanSummerHighC": 29.5,
      "meanWinterLowC": -5.5,
      "avgFirstFrost": "Oct 20",
      "avgLastFrost": "Apr 18",
      "growingSeasonDays": 185
    },
    "crops": [
      {
        "name": "Swiss Chard",
        "score": 0.909,
        "reason": "Cool-season crop fits frost window (Apr 18–Oct 20); rainfall and pH (6.0–7.0) sit comfortably in range."
      },
      {
        "name": "Fig",
        "score": 0.891,
        "reason": "Warm-season crop suits 185-day season; rainfall and pH (6.0–7.0) sit comfortably in range."
      },
      {
        "name": "Muscadine Grape",
        "score": 0.889,
        "reason": "Warm-season crop suits 185-day season; rainfall and pH (6.0–7.0) sit comfortably in range."
      },
      {
        "name": "Asparagus",
        "score": 0.882,
        "reason": "Cool-season crop fits frost window (Apr 18–Oct 20); rainfall and pH (6.0–7.0) sit comfortably in range."
      },
      {
        "name": "Kale",
        "score": 0.861,
        "reason": "Cool-season crop fits frost window (Apr 18–Oct 20); rainfall and pH (6.0–7.0) sit comfortably in range."
      },
      {
        "name": "Collard Greens",
        "score": 0.855,
        "reason": "Cool-season crop fits frost window (Apr 18–Oct 20); rainfall and pH (6.0–7.0) sit comfortably in range."
      },
      {
        "name": "Turnip",
        "score": 0.853,
        "reason": "Cool-season crop fits frost window (Apr 18–Oct 20); rainfall and pH (6.0–7.0) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.851,
        "reason": "Warm-season crop suits 185-day season; rainfall and pH (6.0–7.0) sit comfortably in range."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Louisville, KY",
    "lat": 38.2527,
    "lon": -85.7585,
    "soil": {
      "mapUnitName": "Crider silt loam",
      "componentName": "Crider",
      "texture": "Silt loam",
      "drainage": "Well drained",
      "phLow": 5.8,
      "phHigh": 6.8
    },
    "climate": {
      "meanAnnualRainfallMm": 1145,
      "meanSummerHighC": 30.5,
      "meanWinterLowC": -2,
      "avgFirstFrost": "Oct 28",
      "avgLastFrost": "Apr 10",
      "growingSeasonDays": 201
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.909,
        "reason": "Warm-season crop suits 201-day season; rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Strawberry",
        "score": 0.881,
        "reason": "Cool-season crop fits frost window (Apr 10–Oct 28); rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Sweet Corn",
        "score": 0.878,
        "reason": "Warm-season crop suits 201-day season; rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Swiss Chard",
        "score": 0.876,
        "reason": "Cool-season crop fits frost window (Apr 10–Oct 28); rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Mustard Greens",
        "score": 0.869,
        "reason": "Cool-season crop fits frost window (Apr 10–Oct 28); rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Fig",
        "score": 0.865,
        "reason": "Warm-season crop suits 201-day season; rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Soybean",
        "score": 0.862,
        "reason": "Warm-season crop suits 201-day season; rainfall and pH (5.8–6.8) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.856,
        "reason": "Warm-season crop suits 201-day season; rainfall and pH (5.8–6.8) sit comfortably in range."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Memphis, TN",
    "lat": 35.1495,
    "lon": -90.049,
    "soil": {
      "mapUnitName": "Memphis silt loam",
      "componentName": "Memphis",
      "texture": "Silt loam",
      "drainage": "Well drained",
      "phLow": 5.5,
      "phHigh": 6.5
    },
    "climate": {
      "meanAnnualRainfallMm": 1365,
      "meanSummerHighC": 32.5,
      "meanWinterLowC": 0.5,
      "avgFirstFrost": "Nov 8",
      "avgLastFrost": "Mar 25",
      "growingSeasonDays": 228
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.894,
        "reason": "Warm-season crop suits 228-day season; rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.87,
        "reason": "Warm-season crop suits 228-day season; rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Sweet Potato",
        "score": 0.809,
        "reason": "Warm-season crop suits 228-day season; 1365 mm rain and silt loam soils are a solid match."
      },
      {
        "name": "Okra",
        "score": 0.802,
        "reason": "Warm-season crop suits 228-day season; 1365 mm rain and silt loam soils are a solid match."
      },
      {
        "name": "Soybean",
        "score": 0.794,
        "reason": "Warm-season crop suits 228-day season; 1365 mm rain and silt loam soils are a solid match."
      },
      {
        "name": "Eggplant",
        "score": 0.793,
        "reason": "Warm-season crop suits 228-day season; 1365 mm rain and silt loam soils are a solid match."
      },
      {
        "name": "Sweet Corn",
        "score": 0.791,
        "reason": "Warm-season crop suits 228-day season; 1365 mm rain and silt loam soils are a solid match."
      },
      {
        "name": "Kale",
        "score": 0.79,
        "reason": "Cool-season crop fits frost window (Mar 25–Nov 8); 1365 mm rain and silt loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Houston, TX",
    "lat": 29.7604,
    "lon": -95.3698,
    "soil": {
      "mapUnitName": "Lake Charles clay",
      "componentName": "Lake Charles",
      "texture": "Clay",
      "drainage": "Somewhat poorly drained",
      "phLow": 6,
      "phHigh": 7.2
    },
    "climate": {
      "meanAnnualRainfallMm": 1260,
      "meanSummerHighC": 34,
      "meanWinterLowC": 7,
      "avgFirstFrost": "Dec 10",
      "avgLastFrost": "Feb 15",
      "growingSeasonDays": 298
    },
    "crops": [
      {
        "name": "Tomato",
        "score": 0.919,
        "reason": "Warm-season crop suits 298-day season; rainfall and pH (6.0–7.2) sit comfortably in range."
      },
      {
        "name": "Okra",
        "score": 0.875,
        "reason": "Warm-season crop suits 298-day season; rainfall and pH (6.0–7.2) sit comfortably in range."
      },
      {
        "name": "Soybean",
        "score": 0.866,
        "reason": "Warm-season crop suits 298-day season; rainfall and pH (6.0–7.2) sit comfortably in range."
      },
      {
        "name": "Sweet Corn",
        "score": 0.861,
        "reason": "Warm-season crop suits 298-day season; rainfall and pH (6.0–7.2) sit comfortably in range."
      },
      {
        "name": "Muscadine Grape",
        "score": 0.861,
        "reason": "Warm-season crop suits 298-day season; rainfall and pH (6.0–7.2) sit comfortably in range."
      },
      {
        "name": "Sweet Potato",
        "score": 0.847,
        "reason": "Warm-season crop suits 298-day season; 1260 mm rain and clay soils are a solid match."
      },
      {
        "name": "Eggplant",
        "score": 0.843,
        "reason": "Warm-season crop suits 298-day season; 1260 mm rain and clay soils are a solid match."
      },
      {
        "name": "Basil",
        "score": 0.825,
        "reason": "Warm-season crop suits 298-day season; 1260 mm rain and clay soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Dallas, TX",
    "lat": 32.7767,
    "lon": -96.797,
    "soil": {
      "mapUnitName": "Houston Black clay",
      "componentName": "Houston Black",
      "texture": "Clay",
      "drainage": "Moderately well drained",
      "phLow": 7,
      "phHigh": 8
    },
    "climate": {
      "meanAnnualRainfallMm": 945,
      "meanSummerHighC": 35,
      "meanWinterLowC": 2,
      "avgFirstFrost": "Nov 20",
      "avgLastFrost": "Mar 10",
      "growingSeasonDays": 255
    },
    "crops": [
      {
        "name": "Fig",
        "score": 0.879,
        "reason": "Warm-season crop suits 255-day season; rainfall and pH (7.0–8.0) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.861,
        "reason": "Warm-season crop suits 255-day season; rainfall and pH (7.0–8.0) sit comfortably in range."
      },
      {
        "name": "Cantaloupe",
        "score": 0.839,
        "reason": "Warm-season crop suits 255-day season; 945 mm rain and clay soils are a solid match."
      },
      {
        "name": "Zucchini",
        "score": 0.829,
        "reason": "Warm-season crop suits 255-day season; 945 mm rain and clay soils are a solid match."
      },
      {
        "name": "Summer Squash",
        "score": 0.829,
        "reason": "Warm-season crop suits 255-day season; 945 mm rain and clay soils are a solid match."
      },
      {
        "name": "Swiss Chard",
        "score": 0.827,
        "reason": "Cool-season crop fits frost window (Mar 10–Nov 20); 945 mm rain and clay soils are a solid match."
      },
      {
        "name": "Watermelon",
        "score": 0.821,
        "reason": "Warm-season crop suits 255-day season; 945 mm rain and clay soils are a solid match."
      },
      {
        "name": "Asparagus",
        "score": 0.819,
        "reason": "Cool-season crop fits frost window (Mar 10–Nov 20); 945 mm rain and clay soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Austin, TX",
    "lat": 30.2672,
    "lon": -97.7431,
    "soil": {
      "mapUnitName": "Austin silty clay",
      "componentName": "Austin",
      "texture": "Silty clay",
      "drainage": "Well drained",
      "phLow": 7.2,
      "phHigh": 8
    },
    "climate": {
      "meanAnnualRainfallMm": 870,
      "meanSummerHighC": 35.5,
      "meanWinterLowC": 4.5,
      "avgFirstFrost": "Nov 28",
      "avgLastFrost": "Mar 1",
      "growingSeasonDays": 272
    },
    "crops": [
      {
        "name": "Fig",
        "score": 0.933,
        "reason": "Warm-season crop suits 272-day season; rainfall and pH (7.2–8.0) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.874,
        "reason": "Warm-season crop suits 272-day season; rainfall and pH (7.2–8.0) sit comfortably in range."
      },
      {
        "name": "Cantaloupe",
        "score": 0.874,
        "reason": "Warm-season crop suits 272-day season; rainfall and pH (7.2–8.0) sit comfortably in range."
      },
      {
        "name": "Watermelon",
        "score": 0.857,
        "reason": "Warm-season crop suits 272-day season; rainfall and pH (7.2–8.0) sit comfortably in range."
      },
      {
        "name": "Zucchini",
        "score": 0.842,
        "reason": "Warm-season crop suits 272-day season; 870 mm rain and silty clay soils are a solid match."
      },
      {
        "name": "Summer Squash",
        "score": 0.842,
        "reason": "Warm-season crop suits 272-day season; 870 mm rain and silty clay soils are a solid match."
      },
      {
        "name": "Swiss Chard",
        "score": 0.832,
        "reason": "Cool-season crop fits frost window (Mar 1–Nov 28); 870 mm rain and silty clay soils are a solid match."
      },
      {
        "name": "Sweet Corn",
        "score": 0.824,
        "reason": "Warm-season crop suits 272-day season; 870 mm rain and silty clay soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "San Antonio, TX",
    "lat": 29.4241,
    "lon": -98.4936,
    "soil": {
      "mapUnitName": "Houston Black clay",
      "componentName": "Houston Black",
      "texture": "Clay",
      "drainage": "Moderately well drained",
      "phLow": 7,
      "phHigh": 8
    },
    "climate": {
      "meanAnnualRainfallMm": 810,
      "meanSummerHighC": 35,
      "meanWinterLowC": 5,
      "avgFirstFrost": "Dec 1",
      "avgLastFrost": "Feb 25",
      "growingSeasonDays": 279
    },
    "crops": [
      {
        "name": "Tomato",
        "score": 0.89,
        "reason": "Warm-season crop suits 279-day season; rainfall and pH (7.0–8.0) sit comfortably in range."
      },
      {
        "name": "Fig",
        "score": 0.89,
        "reason": "Warm-season crop suits 279-day season; rainfall and pH (7.0–8.0) sit comfortably in range."
      },
      {
        "name": "Zucchini",
        "score": 0.863,
        "reason": "Warm-season crop suits 279-day season; rainfall and pH (7.0–8.0) sit comfortably in range."
      },
      {
        "name": "Summer Squash",
        "score": 0.863,
        "reason": "Warm-season crop suits 279-day season; rainfall and pH (7.0–8.0) sit comfortably in range."
      },
      {
        "name": "Cantaloupe",
        "score": 0.854,
        "reason": "Warm-season crop suits 279-day season; rainfall and pH (7.0–8.0) sit comfortably in range."
      },
      {
        "name": "Swiss Chard",
        "score": 0.848,
        "reason": "Cool-season crop fits frost window (Feb 25–Dec 1); 810 mm rain and clay soils are a solid match."
      },
      {
        "name": "Asparagus",
        "score": 0.84,
        "reason": "Cool-season crop fits frost window (Feb 25–Dec 1); 810 mm rain and clay soils are a solid match."
      },
      {
        "name": "Watermelon",
        "score": 0.838,
        "reason": "Warm-season crop suits 279-day season; 810 mm rain and clay soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Phoenix, AZ",
    "lat": 33.4484,
    "lon": -112.074,
    "soil": {
      "mapUnitName": "Gilman loam",
      "componentName": "Gilman",
      "texture": "Loam",
      "drainage": "Well drained",
      "phLow": 7.5,
      "phHigh": 8.4
    },
    "climate": {
      "meanAnnualRainfallMm": 205,
      "meanSummerHighC": 41,
      "meanWinterLowC": 7,
      "avgFirstFrost": "Dec 15",
      "avgLastFrost": "Feb 10",
      "growingSeasonDays": 308
    },
    "crops": [
      {
        "name": "Fig",
        "score": 0.758,
        "reason": "Warm-season crop suits 308-day season; 205 mm rain and loam soils are a solid match."
      },
      {
        "name": "Tomato",
        "score": 0.715,
        "reason": "Warm-season crop suits 308-day season; 205 mm rain and loam soils are a solid match."
      },
      {
        "name": "Cantaloupe",
        "score": 0.693,
        "reason": "Warm-season crop suits 308-day season; 205 mm rain and loam soils are a solid match."
      },
      {
        "name": "Swiss Chard",
        "score": 0.668,
        "reason": "Cool-season crop fits frost window (Feb 10–Dec 15); 205 mm rain and loam soils are a solid match."
      },
      {
        "name": "Watermelon",
        "score": 0.664,
        "reason": "Warm-season crop suits 308-day season; 205 mm rain and loam soils are a solid match."
      },
      {
        "name": "Zucchini",
        "score": 0.66,
        "reason": "Warm-season crop suits 308-day season; 205 mm rain and loam soils are a solid match."
      },
      {
        "name": "Summer Squash",
        "score": 0.66,
        "reason": "Warm-season crop suits 308-day season; 205 mm rain and loam soils are a solid match."
      },
      {
        "name": "Southern Pea",
        "score": 0.644,
        "reason": "Warm-season crop suits 308-day season; workable with attention to water and soil pH."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Denver, CO",
    "lat": 39.7392,
    "lon": -104.9903,
    "soil": {
      "mapUnitName": "Renohill clay loam",
      "componentName": "Renohill",
      "texture": "Clay loam",
      "drainage": "Well drained",
      "phLow": 7,
      "phHigh": 8
    },
    "climate": {
      "meanAnnualRainfallMm": 400,
      "meanSummerHighC": 30.5,
      "meanWinterLowC": -8,
      "avgFirstFrost": "Oct 5",
      "avgLastFrost": "May 5",
      "growingSeasonDays": 153
    },
    "crops": [
      {
        "name": "Swiss Chard",
        "score": 0.856,
        "reason": "Cool-season crop fits frost window (May 5–Oct 5); rainfall and pH (7.0–8.0) sit comfortably in range."
      },
      {
        "name": "Asparagus",
        "score": 0.848,
        "reason": "Cool-season crop fits frost window (May 5–Oct 5); 400 mm rain and clay loam soils are a solid match."
      },
      {
        "name": "Fig",
        "score": 0.847,
        "reason": "Warm-season crop suits 153-day season; 400 mm rain and clay loam soils are a solid match."
      },
      {
        "name": "Garlic",
        "score": 0.833,
        "reason": "Cool-season crop fits frost window (May 5–Oct 5); 400 mm rain and clay loam soils are a solid match."
      },
      {
        "name": "Green Bean",
        "score": 0.809,
        "reason": "Warm-season crop suits 153-day season; 400 mm rain and clay loam soils are a solid match."
      },
      {
        "name": "Cabbage",
        "score": 0.804,
        "reason": "Cool-season crop fits frost window (May 5–Oct 5); 400 mm rain and clay loam soils are a solid match."
      },
      {
        "name": "Kale",
        "score": 0.801,
        "reason": "Cool-season crop fits frost window (May 5–Oct 5); 400 mm rain and clay loam soils are a solid match."
      },
      {
        "name": "Tomato",
        "score": 0.797,
        "reason": "Warm-season crop suits 153-day season; 400 mm rain and clay loam soils are a solid match."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Seattle, WA",
    "lat": 47.6062,
    "lon": -122.3321,
    "soil": {
      "mapUnitName": "Alderwood gravelly sandy loam",
      "componentName": "Alderwood",
      "texture": "Gravelly sandy loam",
      "drainage": "Moderately well drained",
      "phLow": 5.5,
      "phHigh": 6.5
    },
    "climate": {
      "meanAnnualRainfallMm": 950,
      "meanSummerHighC": 23.5,
      "meanWinterLowC": 2.5,
      "avgFirstFrost": "Nov 15",
      "avgLastFrost": "Mar 20",
      "growingSeasonDays": 240
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.955,
        "reason": "Warm-season crop suits 240-day season; rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.926,
        "reason": "Warm-season crop suits 240-day season; rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Fig",
        "score": 0.919,
        "reason": "Warm-season crop suits 240-day season; rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Basil",
        "score": 0.911,
        "reason": "Warm-season crop suits 240-day season; rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Kale",
        "score": 0.909,
        "reason": "Cool-season crop fits frost window (Mar 20–Nov 15); rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Strawberry",
        "score": 0.909,
        "reason": "Cool-season crop fits frost window (Mar 20–Nov 15); rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Sweet Corn",
        "score": 0.905,
        "reason": "Warm-season crop suits 240-day season; rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Mustard Greens",
        "score": 0.904,
        "reason": "Cool-season crop fits frost window (Mar 20–Nov 15); rainfall and pH (5.5–6.5) sit comfortably in range."
      }
    ],
    "fromCache": true
  },
  {
    "locationName": "Portland, OR",
    "lat": 45.5152,
    "lon": -122.6784,
    "soil": {
      "mapUnitName": "Woodburn silt loam",
      "componentName": "Woodburn",
      "texture": "Silt loam",
      "drainage": "Moderately well drained",
      "phLow": 5.5,
      "phHigh": 6.5
    },
    "climate": {
      "meanAnnualRainfallMm": 915,
      "meanSummerHighC": 26.5,
      "meanWinterLowC": 2,
      "avgFirstFrost": "Nov 10",
      "avgLastFrost": "Mar 25",
      "growingSeasonDays": 230
    },
    "crops": [
      {
        "name": "Muscadine Grape",
        "score": 0.94,
        "reason": "Warm-season crop suits 230-day season; rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Strawberry",
        "score": 0.938,
        "reason": "Cool-season crop fits frost window (Mar 25–Nov 10); rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Onion",
        "score": 0.93,
        "reason": "Cool-season crop fits frost window (Mar 25–Nov 10); rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Southern Pea",
        "score": 0.917,
        "reason": "Warm-season crop suits 230-day season; rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Kale",
        "score": 0.917,
        "reason": "Cool-season crop fits frost window (Mar 25–Nov 10); rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Garlic",
        "score": 0.913,
        "reason": "Cool-season crop fits frost window (Mar 25–Nov 10); rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Tomato",
        "score": 0.912,
        "reason": "Warm-season crop suits 230-day season; rainfall and pH (5.5–6.5) sit comfortably in range."
      },
      {
        "name": "Mustard Greens",
        "score": 0.912,
        "reason": "Cool-season crop fits frost window (Mar 25–Nov 10); rainfall and pH (5.5–6.5) sit comfortably in range."
      }
    ],
    "fromCache": true
  }
];
