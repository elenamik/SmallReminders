/**
 * Establishes server routes
 */

var express = require('express');
var router = express.Router();
const principles = require('../controllers/principles');
const users = require('../controllers/users');

router.post('/principles/read',
  users.getCurrentUser,
  principles.read
);

router.post('/principles/add',
  users.getCurrentUser,
  principles.add
);

router.post('/principles/delete',
  users.getCurrentUser,
  principles.delete
);

router.post('/principles/update',
  users.getCurrentUser,
  principles.update
);

router.post('/user/create',
  users.create,
  users.login
);

router.post('/user/login',
  users.login
);

router.post('/user/checkAuth',
  users.checkAuth
);

router.post('/user/logout',
  users.logout
);

router.post('/user/delete',
  users.getCurrentUser,
  users.delete
);

module.exports = router;
