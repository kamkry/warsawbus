import React, { useState } from 'react';
import MapBox from 'react-map-gl';
import Buses from 'components/Buses';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map: React.FC = () => {
  const [viewport, setViewport] = useState({
    latitude: 52.223739,
    longitude: 20.994196,
    zoom: 13,
  });

  return (
    <MapBox
      latitude={viewport.latitude}
      longitude={viewport.longitude}
      zoom={viewport.zoom}
      minZoom={11}
      maxZoom={19}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
    >
      <Buses />
    </MapBox>
  );
};

export default Map;
