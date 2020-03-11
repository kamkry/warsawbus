import { NowRequest, NowResponse } from '@now/node/dist';

export default (req: NowRequest, res: NowResponse) => {
  res.status(200).json('seiam');
};
