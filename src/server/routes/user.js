/**
 * Establishes server routes
 */

var express = require('express');
var router = express.Router();
const users = require('../controllers/users');

router.post('/user/create',
  users.create,
  users.login
);

router.post('/user/login',
  users.login
);

module.exports = router;
