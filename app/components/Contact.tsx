"use client"
// components/MapComponent.tsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import * as L from 'leaflet';

// Fix icon issue with Leaflet in Next.js
const icon = L.icon({
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = icon;

const MapComponent: React.FC = () => {
  useEffect(() => {
    // Import Leaflet CSS only if it’s not already imported globally
    import('leaflet/dist/leaflet.css');
  }, []);

  return (
    <MapContainer attributionControl={false} center={[6.5965, 3.3421]} zoom={13} className="w-full h-96">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[6.5965, 3.3421]}>
        <Popup>Na here i dey!!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
