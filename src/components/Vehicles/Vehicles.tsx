import React, { memo, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Vehicle from '../Vehicle';
import { VehicleProps } from '../Vehicle/Vehicle';

const Vehicles: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/api/locations?type=1&line=109')
        .then(res => res.json())
        .then(setData);
    }, 5_000);
    return () => clearInterval(interval);
  }, []);
  if (!data) {
    return null;
  }
  return (
    <>
      {data.map((vehicle: VehicleProps) => {
        return (
          <Vehicle
            key={uuid()}
            line="109"
            latitude={vehicle.latitude}
            longitude={vehicle.longitude}
            rotate={0}
          />
        );
      })}
    </>
  );
};
export default memo(Vehicles);
