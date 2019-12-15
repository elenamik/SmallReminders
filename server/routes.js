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
    principlesController.addPrinciple
)

router.get( '/remove',
    principlesController.removePrinciple
)


module.exports = router;