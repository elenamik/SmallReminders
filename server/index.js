'use strict';
const express = require('express');
require('dotenv').config()
console.log("dotenv test",process.env.TEST)
const routes = require('./routes')
const MongoDB = require('./mongoUtil')
MongoDB.connectToServer().catch( err => {
  console.log(chalk.red("connection to db failed"))
})

// Constants
const PORT = process.env.PORT || 8080 ;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world!! This is Lena, from another branch\n');
});

app.use(routes);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

