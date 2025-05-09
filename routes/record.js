var express = require('express');
var router = express.Router();
var data = require('../data/readData');

/* GET home page. */
router.get('/', function(req, res, next) {
    if(!req.session.user){
        res.redirect('/login');
    }else{
        res.render('record');
    }
});

router.post('/', async (req, res)=>{
    if(!req.session.user) return res.redirect('/login');
    let crop_name = req.body.name;
    let crop_height = req.body.height;
    let crop_temp = req.body.temperature;
    let crop_mois = req.body.soilMoisture;
    data.addPlant(crop_name, crop_height, crop_temp, crop_mois);
    res.redirect('/main');
})

module.exports = router;
