var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");
var mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/userAuth.route");

var app = express();

// MongoDB Connect
var dburl =
  "mongodb+srv://user1:12345@hackernewsclone.0qubq.mongodb.net/HackerNews?retryWrites=true&w=majority";

mongoose.connect(dburl, { useNewUrlParser: true });
const db = mongoose.connection;

db.once("open", function () {
  console.log("MongoDb Connected");
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "Hackernew-opo1121",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.listen(5000, () => {
  console.log("Server started at port 5000");
});
