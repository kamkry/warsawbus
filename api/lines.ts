import { NowRequest, NowResponse } from '@now/node/dist';
import axios from 'axios';

const mapLine = (locations: [{ Lines: string }]) => {
  return locations.map(loc => loc.Lines);
};

export default async (req: NowRequest, res: NowResponse) => {
  const { LOCATION_URL } = process.env;
  const busData = await axios(`${LOCATION_URL}&type=1`);
  const tramData = await axios(`${LOCATION_URL}&type=2`);

  const locations = {
    bus: [...new Set(mapLine(busData.data.result))],
    tram: [...new Set(mapLine(tramData.data.result))],
  };

  res.setHeader('Set-Cookie', 'HttpOnly;Secure;SameSite=Strict');
  res.json(locations);
};
