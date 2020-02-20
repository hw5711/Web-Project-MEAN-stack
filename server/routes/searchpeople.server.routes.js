const express = require("express");
var mongoose = require('mongoose');

const searchpeople = require("../models/searchpeople");
const app = express.Router();

// var textbooks = require('../controllers/textbook.server.controller');

app.post("", function (req, res, next) {
    //if 1 of conditon meet
    if (req.body.lastname != '' && req.body.firstname == '' && req.body.department == '') {
        searchpeople.find({ lastname: req.body.lastname }, function (err, post) {
            if (err) return next(err);
            return res.json(post);
        });
    }

    if (req.body.lastname == '' && req.body.firstname != '' && req.body.department == '') {
        searchpeople.find({ firstname: req.body.firstname }, function (err, post) {
            if (err) return next(err);
            return res.json(post);
        });
    }
    if (req.body.lastname == '' && req.body.firstname == '' && req.body.department != '') {
        searchpeople.find({ department: req.body.department }, function (err, post) {
            if (err) return next(err);
            return res.json(post);
        });
    }

    //if 2 of conditons meet
    if (req.body.lastname != '' && req.body.firstname != '' && req.body.department == '') {
        searchpeople.find({ firstname: req.body.firstname , lastname: req.body.lastname }, function (err, post) {
            if (err) return next(err);
            return res.json(post);
        });
    }
    if (req.body.lastname == '' && req.body.firstname != '' && req.body.department != '') {
        searchpeople.find({ firstname: req.body.firstname, department: req.body.department }, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    }
    if (req.body.lastname != '' && req.body.firstname == '' && req.body.department != '') {
        searchpeople.find({ lastname: req.body.lastname, department: req.body.department  }, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    }
    //if 3 of conditons meet
    if (req.body.lastname != '' && req.body.firstname != '' && req.body.department != '')  {
        searchpeople.find({ firstname: req.body.firstname,lastname: req.body.lastname, department: req.body.department }, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    }


});

app.post("/create", function (req, res, next) {
    searchpeople.create(req.body, function (err, post) {
        if (err) return next(err);
        return res.json(post);
    });
});

module.exports = app;