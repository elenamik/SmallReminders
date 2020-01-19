var express = require('express');
var router = express.Router();
const principles = require('../controllers/principles');

router.get('/read',
  principles.read
);

router.post('/add',
  principles.add
);

router.post('/delete',
  principles.delete
);
