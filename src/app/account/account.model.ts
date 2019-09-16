export interface Account {
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    state: String,
    zipcode: String,
    email: String,
    loginName: String,
    password: String,
    password2: String,
    creator: String,
    //set required to false, create new account may need it to false
   //creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
}