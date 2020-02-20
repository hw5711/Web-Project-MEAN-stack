const express = require("express");
var mongoose = require('mongoose');
const findroommate = require("../models/roommate");
const app = express.Router();

app.post("", function (req, res, next) {
    findroommate.find({ gender: req.body.gender, date: { $lt: req.body.date } , rent: { $lt: req.body.highrent}}, function (err, post) {
        if (err) return next(err);
        return res.json(post);
    });
});

app.post("/create", function (req, res, next) {
    findroommate.create(req.body, function (err, post) {
        if (err) return next(err);
        return res.json(post);
    });
});

module.exports = app;