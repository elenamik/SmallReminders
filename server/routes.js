/**
 * Establishes server routes 
 */

var express = require('express')
var router = express.Router()
const principlesController = require('./controllers/principles')

router.get( '/view',
    principlesController.fetchData,
    principlesController.displayData
);

router.post( '/update',
    principlesController.updatePrinciples,
    principlesController.displayData
)

router.post( '/create',
    principlesController.create,
    principlesController.displayData
)


module.exports = router