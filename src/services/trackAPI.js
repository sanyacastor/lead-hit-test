import axios from 'axios';

const baseURL = 'https://track-api.leadhit.io/client/test_auth';

const params = {
  'Content-Type': 'application/json',
  'api-key': process.env.VUE_APP_TRACK_API_KEY
};

export const getData = async siteId => {
  params['leadhit-site-id'] = siteId;
  try {
    const data = await axios.get(baseURL, params);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};
