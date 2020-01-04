/**
 * Entry point for server, sets up middleware, routing
 */
'use strict';
const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');

// // App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello from the server!\n');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// require('./forDev/createSomeData')
const sampleUser = require('./forDev/sampleUser.js');
app.use(sampleUser); // temporary, until the log in route works

app.use(routes);
module.exports = app;
