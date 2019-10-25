
const mongoose = require('mongoose');

var VoteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    points: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Vote', VoteSchema);
