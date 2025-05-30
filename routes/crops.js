var express = require('express');
var router = express.Router();
var data = require('../data/readData');

// /crops/이름 으로 접속하여 각각 작물의 정보 보여줌
router.get('/:name', function(req, res, next) {
    if(!req.session.user) return res.redirect('/login');
    res.render('crops', { data: data.searchDatabyName(req.params.name), name:req.params.name});
});

// /crops/이름/add 으로 이동해 이름에 해당하는 작물에 정보 추가하는 패이지 
router.get('/:name/add', function(req, res){
    if(!req.session.user) return res.redirect('/login');
    res.render('add',{name: req.params.name});
});

// /crops/이름/add로 post요청을 보냄
router.post('/:name/add', async (req, res)=>{
    if(!req.session.user) return res.redirect('/login');
    let crop_height = req.body.height;
    let crop_temp = req.body.temperature;
    let crop_mois = req.body.soilMoisture;
    data.addData(req.params.name, crop_height, crop_temp, crop_mois);
    res.redirect('/crops/'+req.params.name);
});
module.exports = router;