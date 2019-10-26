var mongoose = require('mongoose');

var ActivitiesSchema = new mongoose.Schema({
    date: Date,
    content: String,
    whos: String,
    ID: String
});

module.exports = mongoose.model('Activities', ActivitiesSchema);