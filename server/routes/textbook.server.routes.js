const express = require("express");
var mongoose = require('mongoose');

const textbook = require("../models/textbook");

const app = express.Router();

// var textbooks = require('../controllers/textbook.server.controller');

app.post("/search",function (req, res, next) {
    // console.log("1:", req.body);
    // console.log("2:", req.body.title);
    // console.log("3:", req.body.author);
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

app.post("/create", function (req, res, next) {
    textbook.create(req.body, function (err, post) {
        if (err) return next(err);
        console.log(post);
        // res.json(post);
    });
});

/*** Textbook page */

// app.get("/search", (req, res, next) => {
//     const posts = Textbook[
//         {
//             isbn: "12421l",
//             title: "book1 :First server-side post",
//             author: "jim",
//             price: 14
//         },
//         {
//             isbn: "132",
//             title: "Second book: server-side post",
//             author: "lily",
//             price: 20
//         }
//     ];
//     res.status(200).json({
//         message: "Posts fetched successfully!",
//         posts: posts
//     });
//     console.log("server side1");
// })

module.exports = app;