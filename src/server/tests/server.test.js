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

let server;
let testElement;

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

describe('/POST principles/add/?content', () => {
  it('should add a principle and return resulting JSON object', async () => {
    const uid = firebase.auth().currentUser.uid;
    const res = await request(server).post('/principles/add')
      .send({
        uid,
        content: 'for testing'
      });
    expect(res.body).toEqual(
      expect.objectContaining({
        success: true
      }));
    testElement = res.body.result;
    console.log('added test element', testElement._id);
  });

  it('should fail if content not provided', async () => {
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

describe('/POST principles/read/', () => {
  it('should return a JSON object with all principles for user', async () => {
    const res = await request(server).post('/principles/read')
      .send({
        uid: firebase.auth().currentUser.uid
      });
    expect(res.body).toEqual(
      expect.objectContaining({
        success: true
      }));
  });
});

describe('/POST principles/update/?id?content', () => {
  it('should delete a principle and return resulting JSON object', async () => {
    const res = await request(server).post('/principles/update')
      .send({
        uid: firebase.auth().currentUser.uid,
        id: testElement._id,
        content: 'for testing - update'
      });
    expect(res.body).toEqual(
      expect.objectContaining({
        success: true
      }));
    console.log('updated test element', testElement._id);
  });

  it('should fail if content is not provided', async () => {
    const res = await request(server).post('/principles/update')
      .send({
        uid: firebase.auth().currentUser.uid,
        id: testElement._id,
        content: undefined
      });
    expect(res.body).toEqual(
      expect.objectContaining({
        success: false
      }));
  });

  it('should fail if targetId is not provided', async () => {
    const res = await request(server).post('/principles/update')
      .send({
        uid: firebase.auth().currentUser.uid,
        id: undefined,
        content: 'for testing'
      });
    expect(res.body).toEqual(
      expect.objectContaining({
        success: false
      }));
  });
});

describe('/POST principles/delete/?id', () => {
  it('should delete a principle and return resulting JSON object', async () => {
    const res = await request(server).post('/principles/delete')
      .send({
        uid: firebase.auth().currentUser.uid,
        id: testElement._id
      });
    expect(res.body).toEqual(
      expect.objectContaining({
        success: true
      })
    );
    console.log('deleted test element', testElement._id);
  });

  it('should fail if delete id not given', async () => {
    const res = await request(server).post('/principles/delete')
      .send({
        uid: firebase.auth().currentUser.uid,
        id: undefined
      });
    expect(res.body).toEqual(
      expect.objectContaining({
        success: false
      })
    );
  });
});

// describe('Hello world', () => {
//   it('should always pass', () => {
//     expect(true).toEqual(true);
//   });
// });
