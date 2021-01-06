import { Router } from 'express';

import { requestToAPI } from '../utils/requestToAPI';

const router = Router();

router.get('/videos/:paramName/:paramValue', async (req, res) => {
  const { paramName, paramValue } = req.params;
  const { access_token, first } = req.query;
  const options = {
    accessToken: access_token,
    endpoint: 'videos',
    queryParams: `?${paramName}=${paramValue}&first=${first}`,
  };

  const data = await requestToAPI(options);

  res.send(data);
});

export default router;
