import React, { useState } from 'react';
import MapGL from 'react-map-gl';

const Map: React.FC = () => {
  const [viewport, setViewport] = useState({
    latitude: 52.223739,
    longitude: 20.994196,
    zoom: 12,
  });

  return (
    <MapGL
      {...viewport}
      minZoom={11}
      maxZoom={19}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
    />
  );
};

export default Map;
