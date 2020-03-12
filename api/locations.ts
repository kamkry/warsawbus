import { NowRequest, NowResponse } from '@now/node/dist';
import axios from 'axios';

export default async (req: NowRequest, res: NowResponse) => {
  const { type, line } = req.query;
  if (!type) res.status(400);
  const { LOCATION_URL } = process.env;
  const locations = await axios(`${LOCATION_URL}&type=${type}&line=${line}`);

  const locationsMapped = locations?.data?.result?.map((loc: any) => ({
    number: loc.VehicleNumber,
    line: loc.Lines,
    time: loc.Time,
    longitude: loc.Lon,
    latitude: loc.Lat,
  }));
  res.send(locationsMapped);
};
