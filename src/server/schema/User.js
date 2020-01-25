var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  uid: String,
  phoneNumber: {
    type: String,
    default: null
  }
});

module.exports = mongoose.model('User', UserSchema);
