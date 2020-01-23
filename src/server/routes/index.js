/**
 * Establishes server routes
 */

var express = require('express');
var router = express.Router();
const principles = require('../controllers/principles');
const user = require('../controllers/user');

router.post('/principles/read',
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

router.post('/user/add',
  user.add,
  principles.add
);

module.exports = router;
