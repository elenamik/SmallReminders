'use strict';

const express = require('express');
const mongoClient = require('./mongo')
require('dotenv').config()


// Constants
const PORT = process.env.PORT || 8080 ;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world!! This is Lena, from another branch\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

mongoClient()