/**
 * Establishes server routes 
 */

var express = require('express');
var router = express.Router();
const principlesController = require('./controllers/principles')

router.get( '/view',
    principlesController.fetchData,
    principlesController.displayData
);

router.get( '/add',
    principlesController.addPrinciple,
    principlesController.displayData
)

router.get( '/remove',
    principlesController.removePrinciple,
    principlesController.displayData
)


module.exports = router;