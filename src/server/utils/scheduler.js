const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = mongoose.model('User');
const SMSAction = mongoose.model('SMSAction');
const moment = require('moment');
const Principle = mongoose.model('Principle');

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
    return principle.content;
  } catch (err) {
    console.log('pickRandomMessageErr', err);
    throw err;
  }
};

const generateActions = (users) => {
  return Promise.all(
    users.map(async (user) => {
      const query = { owner: user.uid };
      const count = await Principle.countDocuments(query);
      if (count === 0) {
        console.log('Warning, uid linked with 0 principles', user.uid);
        return null;
      } else {
        const x = SMSAction({
          owner: user.uid,
          content: await pickRandomMessage(user.uid, count),
          status: 'new',
          sendTime: generateDate()
        });
        return x;
      }
    })
  );
};

const createSMSActions = async () => {
  try {
    const users = await User.find({ });
    let SMSActions = await generateActions(users);
    SMSActions = SMSActions.filter((action) => {
      return action != null;
    });
    console.log('Writing new SMS actions:', SMSActions);
    const response = await SMSAction.collection.insertMany(SMSActions);
    return { success: true, response };
  } catch (err) {
    console.log('scheduler err', err);
  }
};

module.exports = createSMSActions;
