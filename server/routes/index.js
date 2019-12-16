/**
 * Establishes server routes 
 */

var express = require('express')
var router = express.Router()
const principles = require('../controllers/principles')

router.get( '/principles/read',
    principles.read
);

router.post( '/principles/add',
    principles.add
)

router.post( '/principles/delete',
    principles.delete
)

module.exports = router