/**
 * Establishes server routes
 */
var express = require('express');
var router = express.Router();
const principles = require('../controllers/principles');
const user = require('../controllers/user');
const validator = require('../controllers/validator');
// const twilio = require('../controllers/twilio');

// body params: uid
router.post('/principles/read',
  principles.read
);

// body params: uid, content
router.post('/principles/add',
  validator.principlesAdd,
  principles.add
);

// body params: uid, id
router.post('/principles/delete',
  validator.principlesDelete,
  principles.delete
);

// body params: uid, id, content
router.post('/principles/update',
  validator.principlesUpdate,
  principles.update
);

// body params: uid, phoneNumber (optional)
router.post('/user/add',
  user.add,
  principles.addMany
);

// body params: uid
// router.post('/user/delete',
//   user.delete,
//   principles.deleteByUid
// );

// router.post('/twilio/send',
//   user.fetchUser,
//   twilio.send
// );

module.exports = router;
