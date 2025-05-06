
import React from 'react';

const StatusBar: React.FC = () => {
  return (
    <div className="bg-gis-dark text-white text-xs px-4 py-1 flex items-center justify-between">
      <div>Terra View GIS Navigator</div>
      <div>EPSG:4326 (WGS84)</div>
    </div>
  );
};

export default StatusBar;
