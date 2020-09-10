var postdb = require("../models/posts.model");
var userdb = require("../models/users.model");

module.exports = {
  uploadpost: async (req, res) => {
    // let { title, link, text } = req.body;
    // if ((title && (link || text)) {
    //   if (link) {
    //     var checkpost = await postdb.findOne({
    //       $or: [{ title: title }, { link: link }],
    //     });
    //     if (checkpost) {
    //       res.status(411).json({ error: "Post Already Exists" });
    //     } else {
    //        var newPost=await new postdb({
    //            title:title,
    //            link:
    //        }).save();
    //     }
    //   } else {
    //   }
    // } else {
    //   res.status(301).json({ error: "Please Enter all Fields" });
    // }
  },
  deletepost: async (req, res) => {},
  comment: async (req, res) => {},
  deletecomment: async (req, res) => {},
  uploadpost: async (req, res) => {},
  upvote: async (req, res) => {},
};
