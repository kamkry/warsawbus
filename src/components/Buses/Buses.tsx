import React, { memo, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import Bus, { BusProps } from 'components/Bus';

function positionNotChanged(current: BusProps, previous: BusProps) {
  return (
    current.longitude !== previous.longitude &&
    current.latitude !== previous.latitude
  );
}

function hasTheSameId(bus: BusProps) {
  return (b: BusProps) => bus.number === b.number;
}

function calculateRotation(bus: BusProps, lastBus: BusProps) {
  return (
    (Math.atan2(
      bus.longitude - lastBus.longitude,
      bus.latitude - lastBus.latitude
    ) *
      180) /
    Math.PI
  );
}

function getBusesLocation() {
  return axios('/api/locations?type=1&line=109').then(res => res.data);
}
/**
 * Calls the server and updates buses' rotation based on position change
 * @param currentData - data from the latest call
 * @param previousData - data from the previous call
 */
function updateProperties(currentData: BusProps[], previousData: BusProps[]) {
  return currentData.map(bus => {
    const lastBus = previousData.filter(hasTheSameId(bus))[0];
    if (!lastBus) return bus;
    const newBus = { ...bus };
    if (positionNotChanged(bus, lastBus)) {
      newBus.rotate = calculateRotation(bus, lastBus);
    } else {
      newBus.rotate = lastBus.rotate;
    }
    return newBus;
  });
}

const Buses: React.FC = () => {
  const [data, setData] = useState([] as BusProps[]);
  const [previousData, setPreviousData] = useState([] as BusProps[]);

  useEffect(() => {
    const update = () => {
      getBusesLocation().then(newData => {
        const updated = updateProperties(newData, previousData);
        setData(current => {
          setPreviousData(current);
          return updated;
        });
      });
    };
    if (!previousData.length) {
      update();
    }
    const interval = setInterval(update, 5_000);
    return () => clearInterval(interval);
  }, [previousData]);

  if (!data) {
    return null;
  }
  return (
    <>
      {data.map((vehicle: BusProps) => {
        return (
          <Bus
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
export default memo(Buses);
