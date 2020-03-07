/**
 * Entry point for server, sets up middleware, routing
 */
'use strict';
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const routes = require('./routes');
const cookieParser = require('cookie-parser');

// // App
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello from the server! :)\n');
});

app.use(routes);
module.exports = app;
