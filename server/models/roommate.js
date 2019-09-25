var mongoose = require('mongoose');

var findRoommateSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    gender: String,
    department: String,
    rent: Number,
    email: String,
    date: Date
});

module.exports = mongoose.model('findroommate', findRoommateSchema);

