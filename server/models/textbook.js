var mongoose = require('mongoose');

var textbookSchema = new mongoose.Schema({
    isbn: { type: String, required: true },
    title: { type: String, required: false },
    author: { type: String, required: false },
    location: { type: String, required: false },
    price: { type: Number, required: false },
});

module.exports = mongoose.model('textbook', textbookSchema);