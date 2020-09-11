var express = require("express");
var router = express.Router();
router.use(express.json());


/* GET home page. */
<<<<<<< HEAD
router.get('/', function(req, res, next) {
    // res.render('index', {
    //     title: 'Express'
    // });

    res.status(200).json({
        api: 'up'
    });
=======
router.get("/", function (req, res, next) {
  res.send("Hi Welcome to HackerNewsClone");
  res.end();
>>>>>>> 6a226664045df50853ed0d6abf00cf8135eb8d31
});

module.exports = router;
