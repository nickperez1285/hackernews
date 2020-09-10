const Users = require("../users/users-model.js");
const router = require("express").Router();
const userAuth = require("../controllers/posts.controller");
const restricted = require("../services/restricted.middleware");

router.post("/uploadpost", userAuth.register);

router.post("/deletepost", userAuth.login);

router.post("/deletepost", userAuth.login);

router.post("/comment", userAuth.logout);

router.post("/deletecomment", userAuth.logout);

router.post("/upvote", userAuth.logout);

module.exports = router;
