require('dotenv').config();

const {
  PORT,
  TWITCH_API_BASE_URL,
  TWITCH_CLIENT_ID,
  TWITCH_CLIENT_SECRET,
} = process.env;

const axiosConfig = (accessToken) => ({
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Client-ID': TWITCH_CLIENT_ID,
  },
});

export default {
  AXIOS_CONFIG: axiosConfig,
  PORT: PORT || 3002,
  TWITCH_API_BASE_URL,
  TWITCH_CLIENT_ID,
  TWITCH_CLIENT_SECRET,
};
