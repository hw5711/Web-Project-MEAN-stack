const express = require("express");
var mongoose = require('mongoose');

const Account = require("../models/account");
const checkAuth = require("../middleware/check-auth");

const app = express.Router();

//use for updating the account info
app.put("/:id", (req, res, next) => {
        const account = new Account({
            _id: req.body._id,
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
        console.log("req. id : ", req.body._id);
        console.log("req. id : ", req.body.firstName);

        Account.updateOne(
            { _id: req.body._id },
            account
        ).then(result => {
        console.log(result.n);
        // res.status(200).json({ message: "Account update successful!" });
        res.status(200).json(result);
        });
    
    });

app.get("/:id", (req, res, next) => {
    console.log(" server get id # is:", req.params.id);
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