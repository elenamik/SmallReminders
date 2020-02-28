// Dependencies
require('dotenv').config();
require('babel-polyfill');
require('../schema');
const app = require('../server.js');
const http = require('http');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
const ObjectId = require('mongoose').Types.ObjectId;
const mongoDB = require('../utils/mongoDB');
const SMSAction = mongoose.model('SMSAction');
require('firebase/auth');
const { handleActions } = require('../utils/sender');
const moment = require('moment');

let server;
let actionIds;
let actions;

beforeAll(async (done) => {
  server = await http.createServer(app);
  server.listen();
  await mongoDB.connect();
  done();
});

// Tear Down
afterAll(async (done) => {
  await server.close();
  await mongoDB.close();
  done();
});

describe('twilio config', () => {
  it('should load database connection string', () => {
    expect(process.env.TWILIO_ACCOUNT_SID).not.toBeUndefined();
    expect(process.env.TWILIO_AUTH_TOKEN).not.toBeUndefined();
    expect(process.env.TWILIO_PHONE_NUMBER).not.toBeUndefined();
  });
});

const modifyInsertedActions = async (insertedIds) => {
  actionIds = Object.keys(insertedIds).map((key) => {
    return ObjectId(insertedIds[key]);
  });
  await moveBackTimeStamp(actionIds);
  console.log('actions', actionIds);
  actions = await SMSAction.find({
    _id: {
      $in: actionIds
    }
  });
  return actions;
};

const moveBackTimeStamp = async (actionIds) => {
  const timestamp = moment().subtract(24, 'hours')
    .minutes(0).seconds(0).milliseconds(0)
    .toDate();
  const query = {
    _id: {
      $in: actionIds
    }
  };
  const update = {
    $set: {
      sendTime: timestamp
    }
  };
  SMSAction.updateMany(query, update);
};

describe('when sender has sent and archived all SMS actions', () => {
  it('should generate new SMS Actions', async () => {
    const activeActions = false;
    const result = await handleActions(activeActions);
    expect(result.success).toBe(true);
    expect(result.response.insertedCount).toBeGreaterThan(0);
    actions = await modifyInsertedActions(result.response.insertedIds);
  });
});

describe('when sender sees valid SMS actions', () => {
  it('should send and archive the messages', async () => {
    const activeActions = true;
    const result = await handleActions(activeActions);
    expect(result.sendSMSResult).toBe(true);
    expect(result.archiveResult).toBe(true);
  });
});
