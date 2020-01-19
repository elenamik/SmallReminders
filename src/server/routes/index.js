/**
 * Establishes server routes
 */

var express = require('express');
var router = express.Router();
const principles = require('../controllers/principles');
const users = require('../controllers/users');

router.post('/principles/read',
  users.checkIfAuthenticated,
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

router.post('/user/loginWithToken',
  users.loginWithToken
);

router.post('/user/logout',
  users.logout
);

module.exports = router;
