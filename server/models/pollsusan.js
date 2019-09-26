var mongoose = require('mongoose');

var pollsusanSchema = new mongoose.Schema({
    vote: Number,
    creator: String,
});

module.exports = mongoose.model('pollsusan', pollsusanSchema);

