var mongoose = require('mongoose');

var polljohnSchema = new mongoose.Schema({
    vote: Number,
    creator: String,
});

module.exports = mongoose.model('polljohn', polljohnSchema);

