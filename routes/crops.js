var express = require('express');
var router = express.Router();
var data = require('../data/readData');

/* GET home page. */
router.get('/:name', function(req, res, next) {
    res.render('crops', { data: data.getDataByName(data.readData(), req.params.name) });
});

module.exports = router;