'use strict';

function proof( req, res, next) {
    // req.proveIt = "Aaron says Hi";
    req.proofOfAaron = 'Aaron Is Real';
    next();
}

module.exports = proof;