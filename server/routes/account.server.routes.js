const express = require("express");
var mongoose = require('mongoose');

const Account = require("../models/account");
const checkAuth = require("../middleware/check-auth");

const app = express.Router();

//use for updating the account info
app.put("/:id", checkAuth, (req, res, next) => {
        const account = new Account({
            firstName: req.body.firstName,
            lastName: req.body.title,
            address: req.body.title,
            city: req.body.title,
            state: req.body.title,
            zipcode: req.body.title,
            email: req.body.title,
            loginName: req.body.email, 
            password: req.body.password,
            password2: req.body.password2,
            creator: req.userData.userId,
        });
        Post.updateOne(
            { _id: req.params.id, creator: req.userData.userId },
            post
        ).then(result => {
            if (result.nModified > 0) {
                res.status(200).json({ message: "Account update successful!" });
            } else {
                res.status(401).json({ message: "Account not authorized!" });
            }
        });
    }
);

app.get("/:id", (req, res, next) => {
    Account.findById(req.params.id).then(post => {
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: "Account not found!" });
        }
    });
});

module.exports = app;