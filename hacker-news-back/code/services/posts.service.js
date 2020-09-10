var postdb = require("../models/posts.model");
var userdb = require("../models/users.model");

module.exports = {
  duplicateTitle: async (title) => {
    return new Promise(async (resolve, reject) => {
      var post = await postdb.findOne({ title: title });
      if (post) resolve(false);
      else reject("Dupplicate Title");
    });
  },
  duplicateLink: async (link) => {
    return new Promise(async (resolve, reject) => {
      var post = await postdb.findOne({ link: link });
      if (post) resolve(false);
      else reject("Dupplicate Link");
    });
  },
};
