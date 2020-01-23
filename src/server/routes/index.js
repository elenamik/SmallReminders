/**
 * Establishes server routes
 */

var express = require('express');
var router = express.Router();
const principles = require('../controllers/principles');

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

module.exports = router;
