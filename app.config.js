import 'dotenv/config';

export default {
  name: 'CoolApp',
  version: '1.0.0',
  extra: {
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    stripeKey: process.env.REACT_APP_STRIPE_LIVE_PUBLISHABLE_KEY,
    googleKey: process.env.REACT_APP_KEY,
    androidID: process.env.REACT_APP_ANDROID_CLIENT_ID
  },
};