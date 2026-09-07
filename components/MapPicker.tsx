"use client";

import { MapContainer, Marker, TileLayer, useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

const pinIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

type Props = {
  lat: number | null;
  lon: number | null;
  onPick: (lat: number, lon: number) => void;
};

function ClickHandler({ onPick }: { onPick: (lat: number, lon: number) => void }) {
  useMapEvents({
    click(e) {
      onPick(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

function Recenter({ lat, lon }: { lat: number; lon: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lon], Math.max(map.getZoom(), 10), { animate: true });
  }, [lat, lon, map]);
  return null;
}

const US_CENTER: [number, number] = [39.8, -98.5];

export default function MapPicker({ lat, lon, onPick }: Props) {
  const hasPin = lat != null && lon != null;

  return (
    <div className="map-frame">
      <MapContainer
        center={hasPin ? [lat, lon] : US_CENTER}
        zoom={hasPin ? 10 : 4}
        scrollWheelZoom={false}
        className="h-full w-full"
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
        />
        <ClickHandler onPick={onPick} />
        {hasPin ? (
          <>
            <Marker position={[lat, lon]} icon={pinIcon} />
            <Recenter lat={lat} lon={lon} />
          </>
        ) : null}
      </MapContainer>
    </div>
  );
}
