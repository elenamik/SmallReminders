/**
 * Establishes server routes
 */

var express = require('express');
var router = express.Router();
const principles = require('../controllers/principles');
const user = require('../controllers/user');
const twilio = require('../controllers/twilio');

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
  principles.addMany
);

router.post('/twilio/send',
  user.fetchUser,
  twilio.send
);

module.exports = router;
