var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    if(!req.session.user){
        res.render('login');
    }else{
        res.redirect('/main')
    }
});

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
