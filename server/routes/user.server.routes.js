const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
//when create an account, post a new account with userID
const Account = require("../models/account");

const router = express.Router();

router.post("/register", (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(hash => {
        const user = new User({
            email: req.body.email,
            password: hash
        });
        
        user.save()
            .then(result => {
                // console.log("after create an account , server result is :", result._id);
                const account = new Account({
                    firstName: "",
                    lastName: "",
                    address: "",
                    city: "",
                    state: "",
                    zipcode: "",
                    email: "", //user can set another email
                    loginName: req.body.email, //suppose login name is email
                    password: "",
                    password2: "",
                    creator: req.userData.userId
                });
                account.save()
                    .then(result => {
                        console.log("account created with new user");
                    })
                    .catch(err => {
                        console.log("account created faild");
                    });
                res.status(201).json({
                    message: "User created!",
                    result: result,
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });
        
    });
});

router.post("/loginacc", (req, res, next) => {
    let fetchedUser;
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            fetchedUser = user;
            return bcrypt.compare(req.body.password, user.password);
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            const token = jwt.sign(
                { email: fetchedUser.email, userId: fetchedUser._id },
                "secret_this_should_be_longer",
                { expiresIn: "1h" }
            );
            res.status(200).json({
                token: token,
                expiresIn: 3600,
                userId: fetchedUser._id
            });
        })
        .catch(err => {
            return res.status(401).json({
                message: "Auth failed"
            });
        });
});

module.exports = router;
