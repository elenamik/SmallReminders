// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require('firebase/app');
const admin = require('firebase-admin');
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
  const serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG);

  firebase.initializeApp(config);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://small-reminders.firebaseio.com'
  });
};

// const initializeFirebaseApp2 = (config, serviceAccount) => {
//   const serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG);
//   console.log('credentials', serviceAccount);
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: 'https://small-reminders.firebaseio.com'
//   });

//   return firebase.initializeApp(config);
// };
module.exports = { initializeFirebaseApp };
