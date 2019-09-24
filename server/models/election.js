var mongoose = require('mongoose');

var ElectionSchema = new mongoose.Schema({
    name: String,
    creator: String,
    // updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Election', ElectionSchema);