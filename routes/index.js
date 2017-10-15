var express = require('express');
var router = express.Router();
var User = require('../User');
var DBset = require('../db');
/* GET home page. */
router.get('/', function(req, res, next) {
  // var user = new User();
  // user.name= '1';
  // user.age = 1;
  // user.gender = '1';
  // user.tel='1';
  // user.save().then().catch();
  res.render('index', { title: 'Express' });
});

module.exports = router;
