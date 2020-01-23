var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  uid: String,
  phoneNumber: String
});

module.exports = mongoose.model('User', UserSchema);
