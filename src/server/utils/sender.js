const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
const ObjectId = require('mongoose').Types.ObjectId;
const User = mongoose.model('User');
const SMSAction = mongoose.model('SMSAction');
const moment = require('moment');
const cron = require('node-cron');
const twilio = require('./twilio');
const scheduleSMSActions = require('./scheduler');

//  scheduled to run every hour, and check for any SMS actions 'new' and matching the time

const sender = async () => {
  cron.schedule('*/5 * * * * *', async () => {
    try {
      if (await activeActions()) {
        const actions = await getActions();
        console.log('SMS actions obtained', actions);
        sendMessages(actions);
        archiveActions(actions);
      } else {
        console.log('scheduling new SMS actions');
        scheduleSMSActions();
      }
    } catch (err) {
      console.log('Sender error', err);
    }
  });
};

const activeActions = async () => {
  const count = await SMSAction.countDocuments({ status: 'new' });
  if (count > 0) {
    return true;
  } else {
    return false;
  }
};

const getActions = async (hour) => {
  try {
    const query = {
      status: 'new',
      sendTime: {
        $lte: getHourlyTimeStamp()
      }
    };
    return SMSAction.find(query);
  } catch (err) {
    console.log('Fetching actions error', err);
  }
};

const getHourlyTimeStamp = () => {
  return moment().minutes(0).seconds(0).milliseconds(0).toDate();
};

const getPhoneNumber = async (uid) => {
  try {
    const query = { uid };
    const user = await User.findOne(query);
    return user.phoneNumber;
  } catch (err) {
    console.log('fetching user phone number error', err);
  }
};

const sendMessages = (actions) => {
  actions.forEach(async (element) => {
    const phoneNumber = await getPhoneNumber(element.owner);
    if (phoneNumber === null) {
      console.log('skipping, texts not enabled for', element.owner);
    } else {
      twilio.send(phoneNumber, element.content);
    }
  });
};

const archiveActions = (actions) => {
  actions.forEach(async (element) => {
    try {
      console.log('archiving action', element._id);
      const query = { _id: ObjectId(element._id) };
      const update = { status: 'archived' };
      await SMSAction.findOneAndUpdate(query, update);
    } catch (err) {
      console.log('archiving err', element._id, err);
    }
  });
};

module.exports = sender;
