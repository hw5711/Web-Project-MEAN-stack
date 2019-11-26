const express = require("express");
var mongoose = require('mongoose');
const Activities = require("../models/activities");
const registerevent = require("../models/registerevent");

const app = express.Router();

/*** Event Create page */
//get all activities from mongodb
app.post("/create", (req, res, next) => {
    Activities.create(req.body, function (err, post) {
        if (err) return next(err);
        // console.log(post);
        return res.json(post);
    });
});

app.post("/search", (req, res, next) => {
    console.log(req);
    Activities.find({ date: { $gt: req.body.start }, date: { $lt: req.body.end } }, function (err, post) {
    if (err) return next(err);
        console.log(post);
        return res.json(post);
    });
});

app.post("/registed_event", function (req, res, next) {
    registerevent.find({ creator: req.body.creator, date: { $gt: req.body.start }, date: { $lt: req.body.end } }, function (err, post) {
        if (err) return next(err);
        return res.json(post);
    });
});

app.post("/register", (req, res, next) => {
    Activities.create(req.body, function (err, post) {
        if (err) return next(err);
        // console.log(post);
        return res.json(post);
    });
});

module.exports = app;