const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
    _id: { type: String, required: false},
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    address: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    zipcode: { type: String, required: false },
    email: { type: String, required: false },
    loginName: { type: String, required: true },
    password: { type: String, required: false },
    password2: { type: String, required: false },
    //set required to false, create new account may need it to false
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model("Account", accountSchema);
