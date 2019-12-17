/**
 * Entry point for server, sets up middleware, routing
 */

'use strict';
const express = require('express')
require('dotenv').config()
console.log("dotenv test",process.env.TEST)
require('./schema') // must be required before routes
const routes = require('./routes')
const bodyParser = require('body-parser')
const mongoDB = require('./utils/mongoDB');


// Constants
const PORT = process.env.PORT || 8080 
const HOST = '0.0.0.0';

// App
const app = express()
app.get('/', (req, res) => {
  res.send('Hello world!! This is Lena, from another branch\n')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

if (process.env.ENV === 'DEV'){
  const sampleUser = require('./forDev/sampleUser.js')
  app.use(sampleUser( {idString:'5df79c057f17e507e9a27e8c'} ))
}

mongoDB.connect()

app.use(routes);


app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)

