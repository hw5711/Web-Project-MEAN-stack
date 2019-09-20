const express = require("express");
var mongoose = require('mongoose');

const Account = require("../models/account");
const checkAuth = require("../middleware/check-auth");

const app = express.Router();

//use for updating the account info
app.put("/:id", checkAuth, (req, res, next) => {
        const account = new Account({
            _id: req.body.id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode,
            email: req.body.email,
            loginName: req.body.loginName, 
            password: req.body.password,
            password2: req.body.password2,
            creator: req.body.creator,
        });
        account.updateOne(
            { _id: req.params._id, creator: req.params.creator},
            account
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
    // console.log(" server get id # is:", req.params.id);
    Account.findOne({ creator: req.params.id })
    .then(account => {
        if (account) {
            res.status(200).json(account);
        } else {
            res.status(404).json({ message: "Account not found!" });
        }
    });
});

module.exports = app;