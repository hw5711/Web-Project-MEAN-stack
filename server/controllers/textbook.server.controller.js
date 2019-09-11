var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/textbook.js');

exports.list = function (req, res, next) {
    Book.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    })   
};

exports.create = function (req, res, next) {
    Book.create(req.body, function (err, post) {
        if (err) return next(err);
        console.log(post);
        res.json(post);
    });
};
