const express = require("express");
var mongoose = require('mongoose');

const Bus = require("../models/bus");

const app = express.Router();

//use for updating the account info
app.post("/buy", (req, res, next) => {
    Bus.create(req.body, function (err, post) {
        if (err) return next(err);
        console.log(post);
        return res.json(post);
    });
});

module.exports = app;