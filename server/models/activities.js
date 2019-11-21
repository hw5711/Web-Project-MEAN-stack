var mongoose = require('mongoose');

var ActivitiesSchema = new mongoose.Schema({
    date: Date,
    info: String,
    id: String
});

module.exports = mongoose.model('Activities', ActivitiesSchema);