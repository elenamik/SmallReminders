/**
 * User Management
 * Server actions, to be executed when routes are hit
 */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// const Principle = mongoose.model('Principle');
const firebase = require('firebase/app');
require('firebase/auth');

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

exports.login = async (req, res, next) => {
  firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
    .then(() => {
      res.send({
        success: true,
        user: firebase.auth().currentUser
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};
