// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require('firebase/app');
const config = require('../config/firebase.json');

const getFirebaseAppConfig = (env) => {
  if (env === 'production' || env === 'PROD') {
    return config.prod;
  } else {
    return config.dev;
  }
};

const initializeFirebaseApp = (env) => {
  const config = getFirebaseAppConfig(env);
  firebase.initializeApp(config);
};

module.exports = { initializeFirebaseApp };
