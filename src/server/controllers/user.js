/**
 * User Management
 * Server actions, to be executed when routes are hit
 */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = mongoose.model('User');
const samplePrinciples = require('../constants/sample.js');
const { validationResult } = require('express-validator');

exports.add = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new Error(JSON.stringify({ errors: errors.array() }));
    }

    const uid = req.body.uid;
    const phoneNumber = req.body.phoneNumber;
    console.log('creating user entry', uid, phoneNumber);
    const user = new User({
      uid,
      phoneNumber
    });
    await user.save();
    req.body.content = samplePrinciples;
    next();
  } catch (err) {
    console.log('User creation error', String(err));
    res.send({
      success: false,
      message: String(err)
    });
  }
};

exports.fetchUser = async (req, res, next) => {
  try {
    const uid = req.body.uid;
    const query = {
      uid: uid
    };
    const result = await User.findOne(query);
    console.log('fetching user', query);
    req.body.phoneNumber = result.phoneNumber;
    next();
  } catch (err) {
    console.log('User fetch error', String(err));
    res.send({
      success: false,
      message: String(err)
    });
  }
};

exports.delete = async (req, res, next) => {
  try {
    const uid = req.body.uid;
    const query = {
      uid: uid
    };
    await User.deleteOne(query);
    console.log('deleting user', query);
    next();
  } catch (err) {
    console.log('delete user error', String(err));
    res.send({
      success: false,
      message: String(err)
    });
  }
};
