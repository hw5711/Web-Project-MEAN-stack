var mongoose = require('mongoose');

var buybooksSchema = new mongoose.Schema({
    isbn: String, 
    title: String, 
    author: String, 
    price: Number,
    nameOnCard: String,
    cardNum: String,
    cvv: String,
    exp: String,
    billingName: String,
    address: String,
    city: String,
    state: String,
    zipcode: String,
    phone: String,
    amount: Number,
    creator: String,
});

module.exports = mongoose.model('buybooks', buybooksSchema);