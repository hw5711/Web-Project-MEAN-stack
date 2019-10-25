const express = require("express");
var mongoose = require('mongoose');

//const Election = require("../models/election");
const checkAuth = require("../middleware/check-auth");

const Vote = require("../models/vote");
const Pusher = require('pusher');

const app = express.Router();

var pusher = new Pusher({
    appId: '887230',
    key: 'f8155fcb407dc24391c5',
    secret: 'cfade11aa894cb50d366',
    cluster: 'us2',
    encrypted: true
});

//use for updating the account info
app.get('/', (req, res) => {
    Vote.find().then(votes => res.json({ success: true, votes: votes }));
});

app.post('/', (req, res) => {
    const newVote = {
        name: req.body.name,
        points: 1
    };

   // Vote.create(newVote, function (err, post) {
    new Vote(newVote).save().then(vote => {
        pusher.trigger('name-poll', 'name-vote', {
            points: parseInt(vote.points),
            os: vote.name
        });

        return res.json({ success: true, message: 'Thank you for voting' });
    });
});

module.exports = app;