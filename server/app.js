const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.Promise = require('bluebird');
mongoose.set('useFindAndModify', false);
// const Textbook = require("./models/textbook");
// const Activities = require("./models/activities");

const userRoutes = require("./routes/user.server.routes");
const activitiesRoutes = require("./routes/activities.server.routes");
const textbookRoutes = require("./routes/textbook.server.routes");
const accountRoutes = require("./routes/account.server.routes");

const app = express();


// mongoose.connect('mongodb://localhost/mean-angular5', { useNewUrlParser: true, useUnifiedTopology: true, promiseLibrary: require('bluebird') })
//     .then(() => console.log('connection succesful'))
//     .catch((err) => console.error(err));


/*** Mongodb Atlas , By selecting the "Free Sandbox" 
 * in the previous video, we're using MongoDB Atlas 
 * (https://www.mongodb.com/cloud/atlas) in this course 
 * - a hosted MongoDB cluster.*/
/*** huanwu5711@gmail.com with regular password */
/*** admin: huanwu password:ABCD1234 */
/*** IP adress(may changed): 70.114.166.167 */

mongoose
    // .set('useCreateIndex', true)
    .connect(
        "mongodb+srv://huanwu:ABCD1234@webproject-qhq6u.mongodb.net/test?retryWrites=true&w=majority"
        , { useUnifiedTopology: true, useNewUrlParser: true  })
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

module.exports = app;
