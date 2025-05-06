
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap, ZoomControl } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';

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
  return (
    <MapContainer 
      center={center} 
      zoom={zoom} 
      zoomControl={false}
      className="w-full h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomleft" />
      <CoordinatesDisplay />
    </MapContainer>
  );
};

export default Map;
