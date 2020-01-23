/**
 * Testing Principles CRUD API
 */

// Dependencies
require('babel-polyfill');
require('dotenv').config();
require('../schema');
const app = require('../server.js');
const request = require('supertest');
const http = require('http');
const mongoDB = require('../utils/mongoDB');
const { initializeFirebaseApp } = require('../../client/utils/firebase');
const firebase = require('firebase/app');
require('firebase/auth');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = mongoose.model('User');
const Principle = mongoose.model('Principle');

let server;

beforeAll(async (done) => {
  server = await http.createServer(app);
  server.listen();
  await mongoDB.connect();

  // set up user authentication
  initializeFirebaseApp(process.env.NODE_ENV);
  const email = `fortesting_${Math.random().toString(36).substr(2, 5)}@email.com`;
  const password = 'fakepassword';
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      done();
    })
    .catch(err => {
      console.log('sign up error', err);
    });
});

// Tear Down
afterAll(async (done) => {
  const user = firebase.auth().currentUser;
  await User.deleteOne({ owner: user.uid });
  await Principle.deleteMany({ owner: user.uid });
  user.delete()
    .then(() => {
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
    });
  await server.close();
  await mongoDB.close(done);
});

describe('/POST user/add/', () => {
  it('should create User and Principle MongoDB document with expected fields', async () => {
    const uid = firebase.auth().currentUser.uid;
    const res = await request(server).post('/user/add')
      .send({
        uid,
        phoneNumber: '1002003000'
      });
    expect(res.body.success).toEqual(true);
    expect(res.body.result.result.ok).toBe(1);
    const sampleOp = res.body.result.ops[0];
    expect(sampleOp).toHaveProperty('content');
  });

  it('should fail if phone number or uid not given', async () => {
    const uid = firebase.auth().currentUser.uid;
    const res = await request(server).post('/principles/add')
      .send({
        uid,
        content: undefined
      });
    expect(res.body).toEqual(
      expect.objectContaining({
        success: false
      }));
  });
});

// describe('Hello world', () => {
//   it('should always pass', () => {
//     expect(true).toEqual(true);
//   });
// });
