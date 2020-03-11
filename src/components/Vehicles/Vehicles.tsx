import React, { memo, useCallback, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import Vehicle from '../Vehicle';
import { VehicleProps } from '../Vehicle/Vehicle';

function positionNotChanged(vehicle: VehicleProps, lastVehicle: VehicleProps) {
  return (
    vehicle.longitude !== lastVehicle.longitude &&
    vehicle.latitude !== lastVehicle.latitude
  );
}
function hasTheSameId(vehicle: VehicleProps) {
  return (v: VehicleProps) => vehicle.number === v.number;
}

function calculateRotation(vehicle: VehicleProps, lastVehicle: VehicleProps) {
  return (
    (Math.atan2(
      vehicle.longitude - lastVehicle.longitude,
      vehicle.latitude - lastVehicle.latitude
    ) *
      180) /
    Math.PI
  );
}

function updateProperties(lastData: VehicleProps[]) {
  return axios('/api/locations?type=1&line=109').then(res => {
    return res.data.map((vehicle: VehicleProps) => {
      const lastVehicle = lastData.filter(hasTheSameId(vehicle))[0];
      if (!lastVehicle) return vehicle;
      const newVehicle = { ...vehicle };
      if (positionNotChanged(vehicle, lastVehicle)) {
        newVehicle.rotate = calculateRotation(vehicle, lastVehicle);
      } else {
        newVehicle.rotate = lastVehicle.rotate;
      }
      return newVehicle;
    });
  });
}

const Vehicles: React.FC = () => {
  const [data, setData] = useState([] as VehicleProps[]);
  const [lastData, setLastData] = useState([] as VehicleProps[]);

  const update = useCallback(() => {
    updateProperties(lastData).then(newData => {
      setData(old => {
        setLastData(old);
        return newData;
      });
    });
  }, [lastData]);

  useEffect(() => {
    update();
    const interval = setInterval(update, 1_000);
    return () => clearInterval(interval);
  }, [data, lastData, update]);

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
            rotate={vehicle.rotate}
          />
        );
      })}
    </>
  );
};
export default memo(Vehicles);
