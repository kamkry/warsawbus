import React, { useState } from 'react';
import MapBox from 'react-map-gl';
import Vehicle from '../Vehicle';

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
      <Vehicle
        line="197"
        latitude={52.223739}
        longitude={20.994196}
        rotate={90}
      />
    </MapBox>
  );
};

export default Map;
