var mongoose = require('mongoose');

var ActivitiesSchema = new mongoose.Schema({
    date: Date,
    content: String,
    whos: String,
    ID: String,
    // updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Activities', ActivitiesSchema);