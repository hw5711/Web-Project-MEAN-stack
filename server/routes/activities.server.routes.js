const express = require("express");
var mongoose = require('mongoose');
const Activities = require("../models/activities");
const checkAuth = require("../middleware/check-auth");
const app = express.Router();

/*** Activities page */
//Student add activity into calendar
// app.post("/add", (req, res, next) => {
//     const post = new Activities({
//         date: req.body.date,
//         content: req.body.content,
//         whos: req.body.whos,
//         ID: req.body.ID
//     });
//     post.save();
//     res.status(201).json({
//         message: "Post added successfully",
//     });
// });

//get all activities from mongodb
app.post("/search", (req, res, next) => {
    console.log("request is :", req.body);
    // Activities.find().then(documents => {
    //     console.log("find data2: ", documents);
    //     res.status(200).json({
    //         message: "Posts fetched successfully!",
    //         activities: documents
    //     });
    // });
});

module.exports = app;