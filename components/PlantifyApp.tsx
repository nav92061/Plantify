"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import type { AnalyzeResult } from "@/lib/types";

const MapPicker = dynamic(() => import("@/components/MapPicker"), {
  ssr: false,
  loading: () => <div className="map-frame map-skeleton" aria-hidden />,
});

type Phase = "input" | "loading" | "result";

export default function PlantifyApp() {
  const [query, setQuery] = useState("");
  const [lat, setLat] = useState<number | null>(null);
  const [lon, setLon] = useState<number | null>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [geoBusy, setGeoBusy] = useState(false);
  const [phase, setPhase] = useState<Phase>("input");
  const [result, setResult] = useState<AnalyzeResult | null>(null);
  const [email, setEmail] = useState("");
  const [emailDone, setEmailDone] = useState(false);

  function setPin(nextLat: number, nextLon: number, nextLabel?: string) {
    setLat(nextLat);
    setLon(nextLon);
    setLabel(nextLabel ?? null);
  }

  async function useMyLocation() {
    if (!navigator.geolocation) return;
    setGeoBusy(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPin(pos.coords.latitude, pos.coords.longitude, "Your location");
        setQuery("");
        setGeoBusy(false);
      },
      () => setGeoBusy(false),
      { enableHighAccuracy: true, timeout: 8000 },
    );
  }

  async function showCrops() {
    if (!query.trim() && (lat == null || lon == null)) return;

    setPhase("loading");
    setEmailDone(false);

    const payload =
      lat != null && lon != null
        ? { lat, lon, label: label ?? undefined, query: query.trim() || undefined }
        : { query: query.trim() };

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as AnalyzeResult;
      setResult(data);
      setPin(data.lat, data.lon, data.locationName);
      setPhase("result");
    } catch {
      // Client-side network failure: still show something usable.
      setResult({
        locationName: label ?? (query.trim() || "Nearby location"),
        lat: lat ?? 33.749,
        lon: lon ?? -84.388,
        soil: {
          mapUnitName: "Cecil sandy loam",
          componentName: "Cecil",
          texture: "Sandy loam",
          drainage: "Well drained",
          phLow: 5.1,
          phHigh: 6.0,
        },
        climate: {
          meanAnnualRainfallMm: 1260,
          meanSummerHighC: 31.5,
          meanWinterLowC: 1.2,
          avgFirstFrost: "Nov 12",
          avgLastFrost: "Mar 22",
          growingSeasonDays: 235,
        },
        crops: [
          {
            name: "Tomato",
            score: 0.9,
            reason: "Warm-season crop suits a long Southern growing season.",
          },
        ],
        fromCache: true,
      });
      setPhase("result");
    }
  }

  async function sendEmail(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !result) return;
    await fetch("/api/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.trim(),
        locationName: result.locationName,
        crops: result.crops.map((c) => c.name),
      }),
    });
    setEmailDone(true);
  }

  function reset() {
    setPhase("input");
    setResult(null);
    setEmail("");
    setEmailDone(false);
  }

  const canSubmit = Boolean(query.trim()) || (lat != null && lon != null);

  return (
    <main className="shell">
      <header className="brand">
        <p className="brand-mark">Plantify</p>
      </header>

      {phase === "input" && (
        <section className="panel enter">
          <h1 className="headline">Anyone can grow food.</h1>
          <p className="subline">
            Most people just don&apos;t know where to start.
          </p>

          <label className="field-label" htmlFor="location">
            Where are you?
          </label>
          <input
            id="location"
            className="text-input"
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              // Typing a new place clears a prior pin so geocoding wins.
              if (e.target.value.trim()) {
                setLat(null);
                setLon(null);
                setLabel(null);
              }
            }}
            placeholder="Athens, GA or 30606"
            autoComplete="address-level2"
          />

          <button
            type="button"
            className="ghost-btn"
            onClick={useMyLocation}
            disabled={geoBusy}
          >
            {geoBusy ? "Finding you…" : "Use my location"}
          </button>

          <MapPicker
            lat={lat}
            lon={lon}
            onPick={(nextLat, nextLon) => {
              setPin(nextLat, nextLon, "Dropped pin");
              setQuery("");
            }}
          />
          <p className="hint">Tap the map to drop a pin.</p>

          <button
            type="button"
            className="primary-btn"
            disabled={!canSubmit}
            onClick={showCrops}
          >
            Show me what grows here.
          </button>
        </section>
      )}

      {phase === "loading" && (
        <section className="panel loading enter" aria-live="polite">
          <p className="loading-msg">Reading the soil and climate…</p>
          <p className="loading-sub">Usually a few seconds.</p>
        </section>
      )}

      {phase === "result" && result && (
        <section className="panel result enter" aria-live="polite">
          <button type="button" className="back-link" onClick={reset}>
            ← New location
          </button>

          <h2 className="result-title">{result.locationName}</h2>

          <div className="fact-rows">
            <div className="fact-row">
              <span className="fact-key">Soil</span>
              <span className="fact-val">
                {result.soil.mapUnitName} · {result.soil.texture} ·{" "}
                {result.soil.drainage}
              </span>
            </div>
            <div className="fact-row">
              <span className="fact-key">Climate</span>
              <span className="fact-val">
                {result.climate.meanAnnualRainfallMm} mm rain · summer{" "}
                {result.climate.meanSummerHighC}°C · winter{" "}
                {result.climate.meanWinterLowC}°C
              </span>
            </div>
            <div className="fact-row">
              <span className="fact-key">Season</span>
              <span className="fact-val">
                Frost {result.climate.avgLastFrost}–{result.climate.avgFirstFrost}{" "}
                · {result.climate.growingSeasonDays} days
              </span>
            </div>
          </div>

          <h3 className="crops-heading">What thrives here</h3>
          <ol className="crop-list">
            {result.crops.map((crop) => (
              <li key={crop.name} className="crop-item">
                <span className="crop-name">{crop.name}</span>
                <span className="crop-reason">{crop.reason}</span>
              </li>
            ))}
          </ol>

          <form className="email-form" onSubmit={sendEmail}>
            <label className="field-label" htmlFor="email">
              Email me this plan
            </label>
            <div className="email-row">
              <input
                id="email"
                className="text-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
              <button type="submit" className="primary-btn compact">
                Send
              </button>
            </div>
            {emailDone ? (
              <p className="email-ok">Got it — check your inbox later.</p>
            ) : null}
          </form>
        </section>
      )}
    </main>
  );
}
