var mongoose = require('mongoose');

var searchPeopleSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    department: String,
    status: String,
    email: String,
    phone: String
});

module.exports = mongoose.model('searchpeople', searchPeopleSchema);