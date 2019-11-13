var express = require("express");

var router = express.Router();


router.get('/', function(req, res) {
  //burger.all(function(data) {
		res.render('index');
  //});
});


module.exports = router;
