const router = require("express").Router();
const postController = require("../controllers/posts.controller");
const restricted = require("../services/restricted.middleware");

router.post("/uploadpost", restricted, postController.uploadpost);

router.get("/deletepost/:id", restricted, postController.deletepost);

router.post("/comment", restricted, postController.comment);

router.get("/deletecomment/:id", restricted, postController.deletecomment);

router.get("/upvote/:id", restricted, postController.upvote);

module.exports = router;
