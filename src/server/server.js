/**
 * Entry point for server, sets up middleware, routing
 */
'use strict';
const env = process.env.NODE_ENV;
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const routes = require('./routes');
const cookieParser = require('cookie-parser');

// Set up User Management with Firebase
const { initializeFirebaseApp } = require('./utils/firebase');
initializeFirebaseApp(env);
// // App
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello from the server! :P :)\n');
});

// require('./forDev/createSomeData')
// const sampleUser = require('./forDev/sampleUser.js');
// app.use(sampleUser); // temporary, until the log in route works

app.use(routes);
module.exports = app;
