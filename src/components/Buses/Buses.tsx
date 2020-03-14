import React, { memo, useCallback, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import Bus from '../Bus';
import { BusProps } from '../Bus/Bus';

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

/**
 * Calls the server and updates buses' rotation based on position change
 * @param lastData - data from the previous call
 */
function updateProperties(lastData: BusProps[]) {
  return axios('/api/locations?type=1&line=109').then(res => {
    return res.data.map((vehicle: BusProps) => {
      const lastBus = lastData.filter(hasTheSameId(vehicle))[0];
      if (!lastBus) return vehicle;
      const newBus = { ...vehicle };
      if (positionNotChanged(vehicle, lastBus)) {
        newBus.rotate = calculateRotation(vehicle, lastBus);
      } else {
        newBus.rotate = lastBus.rotate;
      }
      return newBus;
    });
  });
}

const Buses: React.FC = () => {
  const [data, setData] = useState([] as BusProps[]);
  const [lastData, setLastData] = useState([] as BusProps[]);

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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const interval = setInterval(update, 10_000);
    return () => clearInterval(interval);
  }, [update]);

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
