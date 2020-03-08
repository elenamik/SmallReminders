// initialize mongoDB
require('dotenv').config();
const mongoDB = require('./mongoDB');
mongoDB.connect();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
require('../schema'); // must be required before routes

// dependencies
const User = mongoose.model('SMSAction');
const Principle = mongoose.model('Principle');
const SMSAction = mongoose.model('User');

const deleteSMSActions = async () => {
  const response = await SMSAction.deleteMany({});
  console.log(response);
};

const deletePrinciples = async () => {
  const response = await Principle.deleteMany({});
  console.log(response);
};

const deleteUsers = async () => {
  const response = await User.deleteMany({});
  console.log(response);
};

const deleteEverything = async () => {
  deleteSMSActions();
  deleteUsers();
  deletePrinciples();
};

// input parsing
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const main = async () => {
//   console.log('Options:');
//   console.log('1. deleteSMSActions');
//   console.log('2. deleteEverything');
//   rl.question('Choose one ', (action) => {
//     switch (action) {
//       case '1':
//         console.log('deleteSMSActions');
//         deleteSMSActions();
//         break;
//       case '2':
//         console.log('deleteEverything');
//         deleteEverything();
//         break;
//       default:
//         console.log('invalid option');
//         break;
//     }
//     rl.close();
//   });
// };

module.exports = { deleteSMSActions, deleteUsers, deleteEverything };
