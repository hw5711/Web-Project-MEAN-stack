const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const nodeMailer = require('nodemailer');
mongoose.Promise = require('bluebird');
mongoose.set('useFindAndModify', false);
const Textbook = require("./models/textbook");
const Activities = require("./models/activities");

const userRoutes = require("./routes/user.server.routes");
const activitiesRoutes = require("./routes/activities.server.routes");
const textbookRoutes = require("./routes/textbook.server.routes");
const accountRoutes = require("./routes/account.server.routes");
const mealRoutes = require("./routes/meal.server.route");
const busRoutes = require("./routes/bus.server.routes");
const electionRoutes = require("./routes/election.server.routes");
const searchpeopleRoutes = require("./routes/searchpeople.server.routes");
const findroommateRoutes = require("./routes/findrm.server.routes");

const app = express();
//app.set('view engine', 'ejs');
//app.use(express.static('public'));

/*** Mongodb Atlas , By selecting the "Free Sandbox" 
 * in the previous video, we're using MongoDB Atlas 
 * (https://www.mongodb.com/cloud/atlas) in this course 
 * - a hosted MongoDB cluster.*/
/*** huanwu5711@gmail.com with regular password */
/*** admin: huanwu password:ABCD1234 */
/*** IP adress(may changed): 70.114.166.167 */

mongoose
    .connect(
        "mongodb+srv://huanwu:ABCD1234@webproject-qhq6u.mongodb.net/test?retryWrites=true&w=majority"
        , {
            useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.use("/user", userRoutes);
app.use("/activities", activitiesRoutes);
app.use("/textbook", textbookRoutes);
app.use("/account", accountRoutes);
app.use("/meal", mealRoutes);
app.use("/bus", busRoutes);
app.use("/election", electionRoutes);
app.use("/searchpeople", searchpeopleRoutes);
app.use("/findroommate", findroommateRoutes);

module.exports = app;
