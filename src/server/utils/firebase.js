// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require('firebase/app');
const admin = require('firebase-admin');
var serviceAccount = require('../../../firebase-service-acct-key.json');

const initializeFirebaseApp = (config) => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://small-reminders-dev.firebaseio.com'
  });
  return firebase.initializeApp(config);
};

module.exports = { initializeFirebaseApp };
