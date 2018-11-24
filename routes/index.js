var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { title: '사커클럽', 
    content: '오신걸환영합니다'
  });
});

module.exports = router;
