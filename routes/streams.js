import { Router } from 'express';

import { requestToAPI } from '../utils/requestToAPI';

const router = Router();

router.get('/top-streams', async (req, res) => {
  const { access_token, first } = req.query;
  const options = {
    accessToken: access_token,
    endpoint: 'streams',
    queryParams: `?first=${first}`,
  };

  const data = await requestToAPI(options);

  res.send(data);
});

// ? paramName: 'game_id' || language || 'user_id' || user_login
router.get('/streams/:paramName/:paramValue', async (req, res) => {
  const { paramName, paramValue } = req.params;
  const { access_token, first, language } = req.query;
  const options = {
    accessToken: access_token,
    endpoint: 'streams',
    queryParams: `?${paramName}=${paramValue}&first=${first}${
      language ? `&language=${language}` : ''
    }`,
  };

  const data = await requestToAPI(options);

  res.send(data);
});

export default router;
