const express = require("express");
var mongoose = require('mongoose');

const Election = require("../models/election");
const checkAuth = require("../middleware/check-auth");

const John = require("../models/polljohn");
const Mary = require("../models/pollmary");
const Susan = require("../models/pollsusan");

const app = express.Router();

//use for updating the account info
app.post("/vote", (req, res, next) => {

    Election.find({creator: req.body.creator}, )
    
    Election.create(req.body, function (err, post) {
        if (err) return next(err);
        console.log(post);
    });
});

module.exports = app;