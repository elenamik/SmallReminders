// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require('firebase/app');

const initializeFirebaseApp = (config) => {
  return firebase.initializeApp(config);
};

module.exports = { initializeFirebaseApp };
