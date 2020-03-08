/**
 * For Sending Messages with Twilio
 */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const config = require('../config/twilio');
const client = require('twilio')(config.accountSid, config.authToken);

const send = async (phoneNumber, content) => {
  try {
    const twilioAction = {
      to: '+1' + phoneNumber,
      from: '+1' + config.twilioPhoneNumber,
      body: content
    };
    console.log('sending action to twilio', twilioAction);
    await client.messages.create(twilioAction);
    return { success: true };
  } catch (err) {
    console.log('Send to twilio error', String(err));
    return {
      success: false,
      message: String(err)
    };
  }
};

module.exports = { send };
