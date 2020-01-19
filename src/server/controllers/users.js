/**
 * User Management
 * Server actions, to be executed when routes are hit
 */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// const Principle = mongoose.model('Principle');
const firebase = require('firebase/app');
require('firebase/auth');
const admin = require('firebase-admin');

/**
 * Creates new user via Firebase
 */
exports.create = async (req, res, next) => {
  firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
    .then(() => {
      next();
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

exports.loginWithToken = async (req, res, next) => {
  if (req.body.token === 'undefined') {
    console.log('no token found');
    res.send({
      success: true
    });
  } else {
    console.log('token identified', req.body.token, typeof (req.body.token));
    admin.auth().verifyIdToken(req.body.token)
      .then(async (decodedToken) => {
        console.log('user had valid token', decodedToken);
        req.user = await admin.auth().getUser(decodedToken.uid);
        res.send({
          success: true,
          user: req.user,
          session: req.session
        });
      })
      .catch(err => {
        console.log('token authentication error', err);
        res.status(500).send('token auth failed', err);
      });
  }
};
// left off - split the logic of these two - token should exec when app loads

exports.login = async (req, res, next) => {
  firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
    .then(async () => {
      req.user = firebase.auth().currentUser;
      console.log('firebase auth current user, after email sign in', firebase.auth().currentUser.email);
      const idToken = await firebase.auth().currentUser.getIdToken(true);
      console.log('id token generated', idToken);
      res.send({
        success: true,
        user: req.user,
        session: req.session,
        idToken
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// exports.setSession = async (req, res, next) => {
//   console.log()
//   const token = firebase.auth().currentUser.getIdToken(true);
//   console.log('token in session', token);
//   res.send({
//     success: true,
//     user: req.user,
//     session: req.session
//   });
// };

exports.logout = async (req, res, next) => {
  firebase.auth().signOut();
};

exports.checkIfAuthenticated = async (req, res, next) => {
  if (firebase.auth().currentUser) {
    next();
  } else {
    res.status(500).send('authentication failed');
  }
};
