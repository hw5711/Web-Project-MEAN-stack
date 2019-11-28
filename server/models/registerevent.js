var mongoose = require('mongoose');

var RegistereventSchema = new mongoose.Schema({
    events:[{
        date: Date,
        info: String,
        id: String,
    }],
    creator: String
});

module.exports = mongoose.model('Registerevent', RegistereventSchema);