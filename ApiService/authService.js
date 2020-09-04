import Constants from 'expo-constants';
const BASE_URL = Constants.manifest.extra.databaseURL;

const apiServiceJWT = {};

apiServiceJWT.profile = (accessToken) => {
  return fetch(`${BASE_URL}/me`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export default apiServiceJWT;
