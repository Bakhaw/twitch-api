import { Router } from 'express';

import { requestToAPI } from '../utils/requestToAPI';

const router = Router();

router.get('/top-games', async (req, res) => {
  const { access_token } = req.query;
  const options = {
    accessToken: access_token,
    endpoint: 'games/top',
    queryParams: '?first=100',
  };

  const data = await requestToAPI(options);

  res.send(data);
});

router.get('/games/:gameId', async (req, res) => {
  const { gameId } = req.params;
  const { access_token } = req.query;
  const options = {
    accessToken: access_token,
    endpoint: 'games',
    queryParams: `?id=${gameId}`,
  };

  const data = await requestToAPI(options);

  res.send(data);
});

export default router;
