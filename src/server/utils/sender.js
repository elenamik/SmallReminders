const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
const ObjectId = require('mongoose').Types.ObjectId;
const User = mongoose.model('User');
const SMSAction = mongoose.model('SMSAction');
const moment = require('moment');
const cron = require('node-cron');
const twilio = require('./twilio');
const createSMSActions = require('./scheduler');

//  scheduled to run every hour, and check for any SMS actions 'new' and matching the time
const startJob = () => {
  cron.schedule(chronString(), async () => {
    const activeActions = await checkActiveActions();
    handleActions(activeActions);
  });
};

const chronString = () => {
  // will run every second (change when testing in dev)
  // return '*/10 * * * * *';

  // will run every hour (prod)
  return '0 * * * *';
};

const handleActions = async (activeActions) => {
  try {
    if (activeActions) {
      const actions = await getActions();
      console.log('SMS actions obtained for current time', actions);
      const result = await handleSend(actions);
      return result;
    } else {
      console.log('no current active actions, creating more');
      const result = await createSMSActions();
      return result;
    }
  } catch (err) {
    console.log('monitor for actions error', err);
    return false;
  }
};

const handleSend = async (actions) => {
  const sendSMSResult = await sendSMS(actions);
  const archiveResult = await archiveActions(actions);
  const result = { sendSMSResult, archiveResult };
  return result;
};

// Will see if there are any 'new' actions. If all actions are archived, more need to be generated
const checkActiveActions = async () => {
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

const sendSMS = (actions) => {
  actions.forEach(async (element) => {
    const phoneNumber = await getPhoneNumber(element.owner);
    if (phoneNumber === null) {
      console.log('skipping, texts not enabled for', element.owner);
    } else {
      console.log('sending text to', phoneNumber);
      twilio.send(phoneNumber, element.content);
    }
  });
  return true;
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
      return false;
    }
  });
  return true;
};

module.exports = { startJob, handleActions, chronString };
