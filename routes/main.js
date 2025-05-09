var express = require('express');
var router = express.Router();
var data = require('../data/readData');

// /main 으로 접속시 로그인 돼있으면 main.ejs랜더링, 로그인 안돼있으면 /login으로 리다이렉션
router.get('/', function(req, res, next) {
  if(!req.session.user){
    res.redirect('/login');
  }else{
    res.render('main', {data: data.readData()});
  }
});

module.exports = router;
