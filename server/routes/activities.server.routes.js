const express = require("express");
var mongoose = require('mongoose');
const Activities = require("../models/activities");
const Registerevent = require("../models/registerevent");

const app = express.Router();

/*** Event Create page */
//get all activities from mongodb
app.post("/create", (req, res, next) => {
    Activities.create(req.body, function (err, post) {
        if (err) return next(err);
        return res.json(post);
    });
});

app.post("/search", (req, res, next) => {
    Activities.find({ date: { $gt: req.body.start }, date: { $lt: req.body.end } }, function (err, post) {
    if (err) return next(err);
        return res.json(post);
    });
});

app.post("/join", function (req, res, next) {
    let eventArr = [];
    for(var c of req.body.events){
        let array = {
            date: c.date,
            info: c.info,
            id: c.id,
        }
        eventArr.push(array);
    }
        let data = {
            events: eventArr,
            creator: req.body.creator
        }
        Registerevent.create(data, function (err, post) {
            if (err) return next(err);
            return res.json(post);
        });
   
});

app.post("/reservation", (req, res, next) => {
    Registerevent.find({creator: req.body.creator}, function (err, post) {
        if (err) return next(err);
        return res.json(post);
    });
});

module.exports = app;