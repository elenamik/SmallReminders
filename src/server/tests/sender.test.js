// Dependencies
require('dotenv').config();
require('babel-polyfill');
require('../schema');
const app = require('../server.js');
const request = require('supertest');
const http = require('http');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
const mongoDB = require('../utils/mongoDB');
const { initializeFirebaseApp } = require('../../client/utils/firebase');
const firebase = require('firebase/app');
const User = mongoose.model('User');
const Principle = mongoose.model('Principle');
require('firebase/auth');

let server;
// let testUser;

beforeAll(async (done) => {
  server = await http.createServer(app);
  server.listen();
  await mongoDB.connect();

  // set up user authentication
  initializeFirebaseApp(process.env.NODE_ENV);
  const email = `fortesting_${Math.random().toString(36).substr(2, 5)}@email.com`;
  const password = 'fakepassword';
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(async () => {
      const user = firebase.auth().currentUser;
      console.log('obtained user in test', user.uid);
      await request(server).post('/user/add')
        .send({
          uid: user.uid
        });
      done();
    })
    .catch(err => {
      console.log('sign up error', err);
    });
});

// Tear Down
afterAll(async (done) => {
  const user = firebase.auth().currentUser;
  await User.deleteOne({ uid: user.uid });
  await Principle.deleteMany({ owner: user.uid });
  user.delete()
    .then(() => {
      console.log('user deleted');
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
    });
  await server.close();
  await mongoDB.close(done);
});

// describe('twilio config', () => {
//   it('should load database connection string', () => {
//     expect(process.env.TWILIO_ACCOUNT_SID).not.toBeUndefined();
//     expect(process.env.TWILIO_AUTH_TOKEN).not.toBeUndefined();
//     expect(process.env.TWILIO_PHONE_NUMBER).not.toBeUndefined();
//   });
// });

describe('sender has sent and archived all SMS actions', () => {
  it('should generate new SMS Actions', () => {
    expect(true).toBe(true);
  });
});
