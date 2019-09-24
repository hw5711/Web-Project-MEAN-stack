const express = require("express");
var mongoose = require('mongoose');

const Election = require("../models/election");
const checkAuth = require("../middleware/check-auth");

const app = express.Router();

//use for updating the account info
app.post("/vote", (req, res, next) => {
    Election.create(req.body, function (err, post) {
        if (err) return next(err);
        console.log(post);
    });
});

module.exports = app;