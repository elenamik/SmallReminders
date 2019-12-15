/**
 * Defines server actions, to be performed via routes
 */
const mongoAPI = require('../mongoAPI');

exports.fetchData = ( req, res, next) => {
        mongoAPI.get('principles_prod',{})
        .then( result => {
            req.data=result;
            next();
        }).catch( err => {
            console.log("data query failed within controller",err);
            res.send("error");
        }) 
}

exports.displayData = (req, res, next) => {
        res.send(JSON.stringify(req.data) || "none" )
}