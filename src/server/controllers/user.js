/**
 * User Management
 * Server actions, to be executed when routes are hit
 */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = mongoose.model('User');
const samplePrinciples = require('../constants/sample.js');

exports.add = async (req, res, next) => {
  try {
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
