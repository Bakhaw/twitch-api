import axios from 'axios';
import { Router } from 'express';

import config from '../config';

const router = Router();

const { TWITCH_CLIENT_ID, TWITCH_CLIENT_SECRET } = config;

router.get('/auth/token', async (req, res) => {
  try {
    const url = `https://id.twitch.tv/oauth2/token?client_id=${TWITCH_CLIENT_ID}&client_secret=${TWITCH_CLIENT_SECRET}&grant_type=client_credentials&scope=user:read:email`;

    const { data } = await axios.post(url);

    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

export default router;
