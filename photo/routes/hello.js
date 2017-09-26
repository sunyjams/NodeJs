var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello James! this time is ' + new Date().toString() + '.');
});

module.exports = router;