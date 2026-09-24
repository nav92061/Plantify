"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { phWords } from "@/lib/watering";
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
  const [error, setError] = useState<string | null>(null);

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
    setError(null);

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
      const data = (await res.json()) as AnalyzeResult & { error?: string };
      if (!res.ok || data.error || !data.crops) {
        throw new Error(data.error || "Analysis failed");
      }
      setResult(data);
      setPin(data.lat, data.lon, data.locationName);
      setPhase("result");
      console.log(
        `[plantify] crop ranking\n${data.crops
          .map((crop, index) => `${index + 1}. ${crop.name}  ${crop.score.toFixed(3)}`)
          .join("\n")}`,
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Analysis failed");
      setPhase("input");
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
          {error ? <p className="form-error">{error}</p> : null}
        </section>
      )}

      {phase === "loading" && (
        <section className="panel loading enter" aria-live="polite">
          <p className="loading-msg">Reading the soil and hardiness zone…</p>
          <p className="loading-sub">This can take a little while.</p>
        </section>
      )}

      {phase === "result" && result && (
        <section className="panel result enter" aria-live="polite">
          <button type="button" className="back-link" onClick={reset}>
            ← New location
          </button>

          <h2 className="result-title">{result.locationName}</h2>
          <p className="soil-name">{result.soil.mapUnitName}</p>

          <div className="stat-grid">
            {result.usdaZone ? (
              <article className="stat-card">
                <span className="stat-key">Zone</span>
                <strong>{result.usdaZone}</strong>
                <span className="stat-note">USDA hardiness</span>
              </article>
            ) : null}
            <article className="stat-card">
              <span className="stat-key">Soil pH</span>
              <strong>
                {result.soil.phLow.toFixed(1)}–{result.soil.phHigh.toFixed(1)}
              </strong>
              <span className="stat-note">{phWords(result.soil.phLow, result.soil.phHigh)}</span>
            </article>
            <article className="stat-card">
              <span className="stat-key">Texture</span>
              <strong>{result.soil.texture}</strong>
            </article>
            <article className="stat-card">
              <span className="stat-key">Drainage</span>
              <strong>{result.soil.drainage}</strong>
            </article>
          </div>

          {result.watering ? (
            <aside className="water-card">
              <p className="water-kicker">Watering</p>
              <h3>{result.watering.headline}</h3>
              <p>{result.watering.detail}</p>
            </aside>
          ) : null}

          <h3 className="crops-heading">What to plant</h3>
          <ol className="crop-list">
            {result.crops.map((crop, index) => (
              <li key={crop.name} className="crop-card">
                <span className="crop-rank" aria-hidden>
                  {index + 1}
                </span>
                <div className="crop-body">
                  <span className="crop-name">{crop.name}</span>
                  {index === 0 ? <span className="crop-badge">Best fit</span> : null}
                  <ul className="crop-tags">
                    {crop.ph ? <li>pH {crop.ph}</li> : null}
                    {crop.zones ? <li>{crop.zones}</li> : null}
                    {crop.soil ? <li>{crop.soil}</li> : null}
                    {crop.drainage ? <li>{crop.drainage}</li> : null}
                  </ul>
                </div>
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
