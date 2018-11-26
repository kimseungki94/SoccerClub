var express = require('express');
var router = express.Router();
var ejs = require('ejs');
/* GET home page. */
router.get('/', function(req, res, next) {  
  res.render('practice/practice',({
    name : 'hongkildong',
    age : '100'
    }));
});

module.exports = router;
