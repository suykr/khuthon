var express = require('express');
var router = express.Router();
var data = require('../data/readData');

/* GET home page. */
router.get('/:name', function(req, res, next) {
    if(!req.session.user) return res.redirect('/login');
    res.render('crops', { data: data.searchDatabyName(req.params.name), name:req.params.name});
});

router.get('/:name/add', function(req, res){
    if(!req.session.user) return res.redirect('/login');
    res.render('add',{name: req.params.name});
})

router.post('/:name/add', async (req, res)=>{
    if(!req.session.user) return res.redirect('/login');
    let crop_height = req.body.height;
    let crop_temp = req.body.temperature;
    let crop_mois = req.body.soilMoisture;
    data.addData(req.params.name, crop_height, crop_temp, crop_mois);
    res.redirect('/crops/'+req.params.name);
});
module.exports = router;