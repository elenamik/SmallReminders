/**
 * User Management
 * Server actions, to be executed when routes are hit
 */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const firebase = require('firebase/app');
require('firebase/auth');

// const authState = async (req, res, next) => {
//   console.log('checking auth state');
//   firebase.auth().onAuthStateChanged((user) => {
//     console.log('in check auth state', user);
//     return user;
//   });
// };

/**
 * Creates new user via Firebase
 */
exports.create = async (req, res, next) => {
  console.log('creating user', req.body.email);
  firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch(err => {
      console.log('create user error', err);
      res.send({ success: false, message: err });
    });
};

exports.login = (req, res, next) => {
  console.log('logging in user', req.body.email);
  firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
    .then(() => {
      const user = firebase.auth().currentUser;
      console.log('firebase auth current user, after email sign in', firebase.auth().currentUser.email);
      res.send({
        success: true,
        user
      });
    })
    .catch(err => {
      console.log('login error', err);
      res.send({
        success: false,
        message: err
      });
    });
};

exports.logout = async (req, res, next) => {
  firebase.auth().signOut();
};

exports.checkAuth = (req, res, next) => {
  const user = firebase.auth().currentUser;
  if (user) {
    console.log('detected user on checkAuth', user.email);
    res.send({ success: true, user });
  } else {
    console.log('no user detected on checkAuth');
    res.send({ success: false });
  }
};

exports.getCurrentUser = async (req, res, next) => {
  const user = firebase.auth().currentUser;
  if (user) {
    console.log('detected user on getCurrentUser', user.email);
    req.user = user;
    next();
  } else {
    console.log('no user detected on getCurrentUser');
    res.send({ success: false });
  }
};

exports.delete = async (req, res, next) => {
  console.log('deleting', req.user.email);
  req.user.delete()
    .then(() => {
      res.send({ success: true });
    })
    .catch((err) => {
      console.log(err);
      res.send({ success: false, message: err });
    });
};
