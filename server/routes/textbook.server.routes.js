const express = require("express");
var mongoose = require('mongoose');

const textbook = require("../models/textbook");
const buybooks = require("../models/buybooks");

const app = express.Router();

// var textbooks = require('../controllers/textbook.server.controller');

app.post("/search",function (req, res, next) {
    if(req.body.isbn != ''){
        textbook.find({isbn: req.body.isbn}, function (err, post) {
            if (err) return next(err);
            //console.log(post);
            return res.json(post);
        });
    }
    if (req.body.title != ''){
        textbook.find({ title: req.body.title }, function (err, post) {
        if (err) return next(err);
        res.json(post);
        });
    }
    if (req.body.author != ''){
        textbook.find({ author: req.body.author }, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    }
});

app.post("/buy", function (req, res, next) {
    buybooks.create(req.body, function (err, post) {
        if (err) return next(err);
        console.log(post);
        return res.json(post);
    });
});

module.exports = app;