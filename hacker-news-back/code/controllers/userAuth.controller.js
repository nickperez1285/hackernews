const bcrypt = require("bcryptjs");
var userdb = require("../models/users.model");
module.exports = {
  register: async (req, res) => {
    let user = req.body;
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(user.password, salt, function (err, hash) {
        var newUser = new userdb({
          username: user.username,
          password: hash,
        });
        var result=await newUser.save();
        if(result.error)
           res.status(401).json({error:"User Already Taken"});
        else
           res.status(200).json({success:"User Created"}); 
      });
    });
  },
  login: async (req, res) => {
    let userCred = req.body;
    let user=await userdb.findOne({username:userCred.username});
    if(user){
        bcrypt.compare(userCred.password, user.password, function(err, res) {
            if(res){

                req.session.username=user.username;
                req.session.id=user._id;
                res.status(200).json({success:"Logged In"})

            }
            else{
                res.status(401).json({error:"Invalid Username/Password"})
            } 
        });
    }
    else{
        res.status(401).json({error:"User Not Found"});
    }
   
  },
  logout: async (req, res) => {
    if (req.session) {
      req.session.destroy((err) => {
        if (err) {
          res.send(" login error");
        } else {
          res.send(" you have been logged out");
        }
      });
    } else {
      res.end();
    }
  },
};
