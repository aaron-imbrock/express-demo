'use strict';

function timeStamp( req, res, next) {
    // req.proveIt = "Aaron says Hi";
    req.timestamp = new Date();
    next();
}

module.exports = timeStamp;