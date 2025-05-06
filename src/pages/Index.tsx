
import React from 'react';
import Map from '../components/Map';
import Sidebar from '../components/Sidebar';
import ToolBar from '../components/ToolBar';
import StatusBar from '../components/StatusBar';

const Index = () => {
  // Default center coordinates (can be changed to any location)
  const defaultCenter: [number, number] = [51.505, -0.09];
  const defaultZoom = 13;

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <div className="flex flex-grow overflow-hidden">
        <ToolBar />
        <Sidebar />
        <div className="flex-grow relative">
          <Map center={defaultCenter} zoom={defaultZoom} />
        </div>
      </div>
      <StatusBar />
    </div>
  );
};

export default Index;
