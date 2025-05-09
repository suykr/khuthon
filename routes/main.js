var express = require('express');
var router = express.Router();
var readData = require('../data/readData');

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(!req.session.user){
    res.redirect('/login');
  }else{
    res.render('main', {data: readData()});
  }
});

module.exports = router;
