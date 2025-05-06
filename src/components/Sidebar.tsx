
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import LayerControl from './LayerControl';

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={`bg-white border-r border-gis-border transition-all duration-300 flex ${isExpanded ? 'w-64' : 'w-12'}`}>
      <div className={`overflow-y-auto flex-grow ${isExpanded ? 'block' : 'hidden'}`}>
        <div className="p-4 border-b border-gis-border">
          <h2 className="text-xl font-bold text-gis-dark">Terra View</h2>
          <p className="text-sm text-gray-500">GIS Navigator</p>
        </div>
        <LayerControl />
      </div>
      <div 
        className="border-l border-gis-border flex items-center cursor-pointer bg-gray-50 hover:bg-gray-100"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="p-2">
          {isExpanded ? <ChevronLeft /> : <ChevronRight />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
