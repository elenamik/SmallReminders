/**
 * Establishes server routes
 */

var express = require('express');
var router = express.Router();
const principles = require('../controllers/principles');
const users = require('../controllers/users');

router.get('/principles/read',
  principles.read
);

router.post('/principles/add',
  principles.add
);

router.post('/principles/delete',
  principles.delete
);

router.post('/principles/update',
  principles.update
);

router.post('/user/create',
  users.create,
  users.login
);

router.post('/user/login',
  users.login
);

module.exports = router;
