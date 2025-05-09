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
    let crop_date = getCurrentDate();
    data.addPlant(crop_name, crop_date, crop_height, crop_temp, crop_mois);
    res.redirect('/main');
})

function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}${month}${day}`;
}

module.exports = router;
