var mongoose = require('mongoose');

var MealSchema = new mongoose.Schema({
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
    choice: String,
    creator: String,
    // updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Meal', MealSchema);