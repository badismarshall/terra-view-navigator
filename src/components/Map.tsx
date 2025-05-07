
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngTuple } from 'leaflet';

// This is a workaround for the leaflet icons issue
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
  center: LatLngTuple;
  zoom: number;
}

// Component to display coordinates
const CoordinatesDisplay = () => {
  const [position, setPosition] = useState<{ lat: number; lng: number }>({ lat: 0, lng: 0 });
  const map = useMap();

  useEffect(() => {
    const updatePosition = (e: any) => {
      setPosition({ lat: e.latlng.lat, lng: e.latlng.lng });
    };

    map.on('mousemove', updatePosition);
    
    return () => {
      map.off('mousemove', updatePosition);
    };
  }, [map]);

  return (
    <div className="absolute bottom-2 right-2 bg-white p-2 rounded-md shadow-md text-sm z-[1000]">
      <strong>Lat:</strong> {position.lat.toFixed(6)} <strong>Lng:</strong> {position.lng.toFixed(6)}
    </div>
  );
};

const Map: React.FC<MapProps> = ({ center, zoom }) => {
  // Create a unique key for the MapContainer to force re-render when center/zoom change
  const mapKey = `${center[0]}-${center[1]}-${zoom}`;
  
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <MapContainer 
        key={mapKey}
        center={center}
        zoom={zoom}
        zoomControl={false}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <ZoomControl position="bottomleft" />
        <CoordinatesDisplay />
      </MapContainer>
    </div>
  );
};

export default Map;
