/**
 * For Sending Messages with Twilio
 */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// const config = require('../config/twilio');
// const client = require('twilio')(config.accountSid, config.authToken);

exports.send = async (req, res, next) => {
  try {
    /*
     message sending disabled
    */
    // const twilioAction = {
    //   to: '+1' + req.body.phoneNumber,
    //   from: '+1' + config.twilioPhoneNumber,
    //   body: 'This is a text message!'
    // };
    // await client.messages.create(twilioAction);

    res.send({ success: true });
  } catch (err) {
    console.log('Send to twilio error', String(err));
    res.send({
      success: false,
      message: String(err)
    });
  }
};
