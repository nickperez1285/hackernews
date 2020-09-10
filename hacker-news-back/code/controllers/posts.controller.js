var postdb = require("../models/posts.model");
var userdb = require("../models/users.model");
var postServices = require("../services/posts.service");
module.exports = {
  uploadpost: async (req, res) => {
    let { title, link, text } = req.body;
    if (title && (link || text)) {
      postServices
        .duplicateTitle(title)
        .then((status) => {
          if (link) {
            postServices.duplicateLink(link).then((status) => {});
          } else {
          }
        })
        .catch((e) => {
          res.status(411).json({ error: e });
        });
    } else {
      res.status(411).json({ error: "Please Fill All The Details" });
    }
  },
  deletepost: async (req, res) => {},
  comment: async (req, res) => {},
  deletecomment: async (req, res) => {},
  uploadpost: async (req, res) => {},
  upvote: async (req, res) => {},
};
