var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
});

router.get('/reg', function(req, res) {
  res.render('reg', {
    title:'用户注册'
  });
});

router.post('/reg', function(req, res) {
  if(req.body['password-repeat'] != req.body['password']){
    req.flash('error', '两次输入的口令不一致');
    return res.redirect('/reg');
  }
  var md5 = crypto.createHash('md5');
  var password = md5.update(req.body.password).digest('base64');

  var newUser = new User({
    name:req.body.username,
    password:password,
  });

  User.get(newUser.name, function(err, user) {
    if(user)
      err = 'Username already exists.';
    if(err){
      req.flash('error', err);
      return res.redirect('/reg');
    }

    newUser.save(function(err) {
      if(err){
        req.flash('error', err);
        return res.redirect('/reg');
      }
      req.session.user = newUser;
      req.flash('success', '注册成功');
      res.redirect('/');
    });
  });
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
