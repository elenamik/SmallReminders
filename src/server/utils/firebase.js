// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require('firebase/app');
const firebaseConfig = require('../config/firebase');

const getFirebaseAppConfig = (env) => {
  if (env === 'production' || env === 'PROD') {
    return firebaseConfig.firebaseConfigPROD;
  } else {
    return firebaseConfig.firebaseConfigDEV;
  }
};

const initializeFirebaseApp = (env) => {
  const config = getFirebaseAppConfig(env);
  firebase.initializeApp(config);
};

module.exports = { initializeFirebaseApp };
