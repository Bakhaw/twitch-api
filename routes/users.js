import { Router } from 'express';

import { requestToAPI } from '../utils/requestToAPI';

const router = Router();

router.get('/users/:userId', async (req, res) => {
  const { userId } = req.params;
  const { access_token } = req.query;
  const options = {
    accessToken: access_token,
    endpoint: 'users',
    queryParams: `?id=${userId}`,
  };

  const data = await requestToAPI(options);

  res.send(data);
});

router.get('/users/follows/:userId', async (req, res) => {
  const { userId } = req.params;
  const { access_token } = req.query;
  const options = {
    accessToken: access_token,
    endpoint: 'users/follows',
    queryParams: `?to_id=${userId}`,
  };

  const data = await requestToAPI(options);

  res.send(data);
});

export default router;
