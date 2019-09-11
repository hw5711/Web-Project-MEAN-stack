const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.Promise = require('bluebird');

const Textbook = require("./models/textbook");
const Activities = require("./models/activities");


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
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

/*** Activities page */

//Student add activity into calendar
app.post("/activities/add", (req, res, next) => {
    const post = new Activities({
        date: req.body.date,
        content: req.body.content,
        whos: req.body.whos,
        ID: req.body.ID
    });

    // console.log(post);
    post.save();
    // post.save().then(createdPost => {
        res.status(201).json({
            message: "Post added successfully",
            // postId: createdPost._id
        });
    // });
});

//get all activities from mongodb
app.get("/activities/search", (req, res, next) => {
    Activities.find().then(documents => {
        console.log("find data2: ", documents);
        res.status(200).json({
            message: "Posts fetched successfully!",
            activities: documents
        });
    });
});

/*** Textbook page */

app.get("/textbook/search", (req, res, next) => {
    const posts = Textbook[
        {
            isbn: "12421l",
            title: "book1 :First server-side post",
            author: "jim",
            price: 14
        },
        {
            isbn: "132",
            title: "Second book: server-side post",
            author: "lily",
            price: 20
        }
    ];
    res.status(200).json({
        message: "Posts fetched successfully!",
        posts: posts
    });
    console.log("server side1");
});

module.exports = app;
