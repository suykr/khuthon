var express = require('express');
var router = express.Router();

// /login 패이지로 왔을때 이미 로그인 돼있으면 /main으로 이동, 로그인 안돼있으면 login.ejs 렌더링링
router.get('/', function(req, res, next) {
    if(!req.session.user){
        res.render('login');
    }else{
        res.redirect('/main')
    }
});

// /login 으로 post 요청을 보내 관리자인지 확인
router.post('/', async (req, res)=>{
    let id = req.body.id;
    let pw = req.body.pw;
    if(id=='admin' && pw=='admin'){
        req.session.user = {
            who: 'admin'
        }
        res.redirect('/main');
    }else{
        res.redirect('/login');
    }
})

module.exports = router;
