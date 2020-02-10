const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = mongoose.model('User');
const SMSAction = mongoose.model('SMSAction');
const moment = require('moment');
const Principle = mongoose.model('Principle');

// left off : SMS actions not saving to DB. also, this is sort of slow

const generateDate = () => {
  // will choose random hourly time within 24 hours of current time
  return moment().add(Math.round(Math.random() * 24), 'hours')
    .minutes(0).seconds(0).milliseconds(0)
    .toDate();
};

const pickRandomMessage = async (uid, count) => {
  try {
    const query = { owner: uid };
    const r = Math.floor(Math.random() * count);
    const principle = await Principle.findOne(query).skip(r);
    console.log('random chosen', principle);
    return principle.content;
  } catch (err) {
    console.log('pickRandomMessageErr', err);
    throw err;
  }
};

const scheduler = async () => {
  try {
    const users = await User.find({ });
    const SMSActions = users.map(async (user, key) => {
      const query = { owner: user.uid };
      const count = await Principle.count(query);
      if (count === 0) {
        console.log('Warning, uid linked with 0 principles', user.uid);
        // return null
      } else {
        return new SMSAction({
          owner: user.uid,
          content: await pickRandomMessage(user.uid, count),
          status: 'new',
          sendTime: generateDate()
        });
      }
    });
    await SMSAction.collection.insertMany(SMSActions);
    console.log(SMSActions);
  } catch (err) {
    console.log('scheduler err', err);
  }
};

module.exports = scheduler;
