var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");
var mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/userAuth.route");
var postsRouter = require("./routes/posts.route");

var app = express();

// MongoDB Connect
var dburl = "mongodb+srv://user1:12345@hackernewsclone.0qubq.mongodb.net/HackerNews?retryWrites=true&w=majority";

mongoose.connect(dburl, {
    useNewUrlParser: true
});
const db = mongoose.connection;

db.once("open", function() {
    console.log("MongoDb Connected");
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(helmet());
app.use(cors());
app.use(
<<<<<<< HEAD
    session({
        secret: "Hackernew-opo1121",
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: true
        },
    })
);


app.get("/", (req, res) => {
    res.status(200).json({
        api: 'up'
    });
});
// app.use("/", indexRouter);
// app.use("/users", usersRouter);
// app.use("/posts", postsRouter);
=======
  session({
    secret: "Hackernew-opo1121",
    // resave: false,
    // saveUninitialized: true,
    cookie: {},
  })
);

app.use("/", indexRouter);
app.use("/users/", usersRouter);
app.use("/posts/", postsRouter);
>>>>>>> 238119bf9f9d9f87aec4e306e2356abe5ebdc017

app.listen(3000, () => {
  console.log("Port started at 3000");
});
//module.exports = app;
