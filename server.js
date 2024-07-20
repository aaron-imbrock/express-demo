'use strict';

const express = require('express');
const cors = require('cors');

// Our Dependencies
const handleNotFound = require('./handlers/404.js');
const handleServerError = require('./handlers/500.js');
const timestamp = require('./middleware/timestamp.js');
const proof = require('./middleware/proof.js');

const app = express();

app.use(cors());

// Route Definitions
// Get route for the "home" page;
app.get('/', handleGetHome);
app.get('/data', timestamp, proof, handleGetData);
app.get('/broken', handleBroken);
app.get("*", handleNotFound);
app.use(handleServerError);


// Route Handler Functions
function handleGetData(req,res) {
    // req.query is made by express
    // req.proofOfAaron is something I made
    // req.proofOfAaron is actually middlware ...
    let name = req.query.name;
    let age = req.query.age;
    let output = { 
        name: "Aaron",
        age: age,
        time: req.timestamp,
        proof: req.proofOfAaron,
    }
    res.status(200).json(output);
};

function handleGetHome(req,res) {
    console.log(req.headers);
    res.status(200).send('Hello World');
};

function handleBroken(req, res, next) {
    // throw new Error("Something went wrong");
    next("We broke it on purpose!");
};

// Middleware Functions
// function timeStamp( req, res, next) {
//     // req.proveIt = "Aaron says Hi";
//     req.timestamp = new Date();
//     next();
// }

// function proof( req, res, next) {
//     // req.proveIt = "Aaron says Hi";
//     req.proofOfAaron = 'Aaron Is Real';
//     next();
// }

function start(port) {
    app.listen(port, () => {
        console.log("listening on port " + port);
});
}



module.exports = {app, start};