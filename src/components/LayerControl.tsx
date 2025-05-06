
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

interface LayerOption {
  id: string;
  name: string;
  active: boolean;
}

const LayerControl: React.FC = () => {
  const [layers, setLayers] = useState<LayerOption[]>([
    { id: 'osm', name: 'OpenStreetMap', active: true },
    { id: 'satellite', name: 'Satellite', active: false },
    { id: 'terrain', name: 'Terrain', active: false },
    { id: 'markers', name: 'Points of Interest', active: false },
    { id: 'boundaries', name: 'Administrative Boundaries', active: false }
  ]);

  const toggleLayer = (id: string) => {
    setLayers(layers.map(layer => 
      layer.id === id ? { ...layer, active: !layer.active } : layer
    ));
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-3">Map Layers</h3>
      <div className="space-y-2">
        {layers.map(layer => (
          <div 
            key={layer.id} 
            className="flex items-center justify-between p-2 bg-white rounded-md shadow-sm cursor-pointer hover:bg-gray-50"
            onClick={() => toggleLayer(layer.id)}
          >
            <span>{layer.name}</span>
            <div className={`w-5 h-5 flex items-center justify-center rounded-sm border ${layer.active ? 'bg-gis-primary border-gis-primary' : 'border-gray-300'}`}>
              {layer.active && <Check className="w-4 h-4 text-white" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayerControl;
