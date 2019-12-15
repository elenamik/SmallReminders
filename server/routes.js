/**
 * Establishes server routes 
 */

var express = require('express');
var router = express.Router();
const MongoDB = require('./mongoUtil')

router.get('/view', async (req, res) => {
        const db = MongoDB.getDB();
        try {
            const collection = db.collection('principles_prod')
            const results = await collection.findOne({})
            res.send('you will see data here');

        }
        catch (err) {
            console.log("db error",err)
        }
     
});


module.exports = router;