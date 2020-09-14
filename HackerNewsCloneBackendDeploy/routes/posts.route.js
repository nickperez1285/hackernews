const router = require("express").Router();
const postController = require("../controllers/posts.controller");
const restricted = require("../services/restricted.middleware");

router.post("/post", postController.uploadPost);

router.delete("/post/:id", postController.deletePost);

router.post("/comment/id", postController.comment);

router.delete("/comment/:id", postController.deleteComment);

router.put("/upvote/:id", postController.upvote);

router.get("/", postController.getAllPosts);

router.get("/postcomments/:id", postController.getAllComments);

router.get("/comment/:id", postController.getComment);

router.get("/upvote/:id", postController.getUpvotes);

module.exports = router;
