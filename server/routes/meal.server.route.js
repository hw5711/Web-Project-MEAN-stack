const express = require("express");
var mongoose = require('mongoose');

const Meal = require("../models/meal");
const checkAuth = require("../middleware/check-auth");

const app = express.Router();

//use for updating the account info
app.post("/buy",(req, res, next) => {
    Meal.create(req.body, function (err, post) {
        if (err) return next(err);
        console.log(post);
    });
});

module.exports = app;