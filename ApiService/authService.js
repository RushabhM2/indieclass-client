import { DATABASE_URL } from './../env'
const BASE_URL = process.env.DATABASE_URL || DATABASE_URL

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
