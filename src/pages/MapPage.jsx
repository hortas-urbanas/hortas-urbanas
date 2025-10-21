import React from 'react';
import { Card } from '../components/UIKit.jsx'; // <--- CORREÇÃO AQUI

const MapPage = () => {
  return (
    <Card className="w-full h-full">
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-3xl font-bold text-green-400 mb-4">Mapa das Hortas</h2>
        <p className="text-gray-300 mb-4">Esta página irá mostrar um mapa interativo com a localização das hortas urbanas.</p>
        <div className="w-full h-96 bg-gray-700 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">[Componente do Mapa (Leaflet/Google Maps) virá aqui]</p>
        </div>
      </div>
    </Card>
  );
};

export default MapPage;

