var mongoose = require('mongoose');

var pollmarySchema = new mongoose.Schema({
    vote: Number,
    creator: String,
});

module.exports = mongoose.model('pollmary', pollmarySchema);

