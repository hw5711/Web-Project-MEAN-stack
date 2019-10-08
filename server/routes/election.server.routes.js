const express = require("express");
var mongoose = require('mongoose');

//const Election = require("../models/election");
const checkAuth = require("../middleware/check-auth");

const John = require("../models/polljohn");
const Mary = require("../models/pollmary");
const Susan = require("../models/pollsusan");

const app = express.Router();

//use for updating the account info
app.post("/vote", (req, res, next) => {

    John.fin
    if(req.body.name === "john"){
        John.create({})
    }
});

module.exports = app;