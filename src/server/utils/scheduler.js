const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = mongoose.model('User');
const SMSAction = mongoose.model('SMSAction');
const moment = require('moment');

const generateDate = () => {
  // will choose random hourly time within 24 hours of current time
  return moment().add(Math.round(Math.random() * 24), 'hours')
    .minutes(0).seconds(0).milliseconds(0)
    .toDate();
};

const scheduler = async () => {
  generateDate();
  try {
    const users = await User.find({ });
    const SMSActions = users.map((user, key) => {
      return new SMSAction({
        owner: user.uid,
        content: 'random placeholder',
        status: 'new',
        sendTime: generateDate()
      });
    });
    await SMSAction.collection.insertMany(SMSActions);
    console.log(SMSActions);
  } catch (err) {
    console.log(err);
  }
};

module.exports = scheduler;
