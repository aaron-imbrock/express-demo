'use strict';

function handleServerError(err, req, res, next) {
    console.error(err);
    res.status(500).json({
        error: 500,
        route: req.path,
        message: "Internal Server Error"
    });
}

module.exports = handleServerError;