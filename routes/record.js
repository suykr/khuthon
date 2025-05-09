var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if(!req.session.user){
        res.redirect('/login');
    }else{
        res.render('record');
    }
});

router.post('/', async (req, res)=>{
    let crop_name = req.body.name;
    let crop_height = req.body.height;
    let crop_temp = req.body.temperature;
    let crop_mois = req.body.soilMoisture;
})

module.exports = router;
