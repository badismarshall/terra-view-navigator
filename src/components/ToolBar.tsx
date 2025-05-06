
import React from 'react';
import { Layers, Search, Map as MapIcon, Ruler, Download, Settings } from 'lucide-react';

const ToolBar: React.FC = () => {
  const tools = [
    { id: 'layers', icon: <Layers />, name: 'Layers' },
    { id: 'search', icon: <Search />, name: 'Search' },
    { id: 'navigate', icon: <MapIcon />, name: 'Navigate' },
    { id: 'measure', icon: <Ruler />, name: 'Measure' },
    { id: 'export', icon: <Download />, name: 'Export' },
    { id: 'settings', icon: <Settings />, name: 'Settings' }
  ];

  return (
    <div className="flex flex-col items-center bg-gis-dark text-white p-2 space-y-4">
      {tools.map(tool => (
        <button 
          key={tool.id}
          className="p-2 rounded-md hover:bg-gis-secondary transition-colors tooltip"
          title={tool.name}
        >
          {tool.icon}
        </button>
      ))}
    </div>
  );
};

export default ToolBar;
