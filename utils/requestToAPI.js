import axios from 'axios';

import config from '../config';

const { AXIOS_CONFIG, TWITCH_API_BASE_URL } = config;

export async function requestToAPI({ accessToken, endpoint, queryParams }) {
  try {
    const url = `${TWITCH_API_BASE_URL}/${endpoint}/${queryParams}`;

    const { data } = await axios.get(url, AXIOS_CONFIG(accessToken));

    return data;
  } catch (err) {
    return err;
  }
}
