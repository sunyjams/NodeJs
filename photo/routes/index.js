var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

exports.index = function(req, res) {
  res.render('index', {title:'Express'});
};

exports.user = function(req, res) {
  
};

exports.post = function(req, res) {
  
};

exports.reg = function(req, res) {
  
};

exports.doReg = function (req, res) {
  
};

exports.login = function(req, res) {
  
};

exports.doLogin = function(req, res) {
  
};

exports.logout = function(req, res) {
  
};


// router.get('/list', function(req, res, next) {
//   var drinks = [
//     { name: 'Bloody Mary', drunkness: 3 },
//     { name: 'Martini', drunkness: 5 },
//     { name: 'Scotch', drunkness: 10 }
//   ];
//   var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

//   res.render('list', {
//     drinks: drinks,
//     tagline: tagline
//   });
// });

module.exports = router;
