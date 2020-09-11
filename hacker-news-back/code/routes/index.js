var express = require('express');
var router = express.Router();
router.use(express.json());


/* GET home page. */
router.get('/', function(req, res, next) {
    // res.render('index', {
    //     title: 'Express'
    // });

    res.status(200).json({
        api: 'up'
    });
});

module.exports = router;
