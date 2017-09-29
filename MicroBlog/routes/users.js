var express = require('express');
var router = express.Router();

var users = {
  'James' : {
    name:'James',
    website:'www.sunyjams.net'
  }
};

/* GET users listing. */
router.all('/:username', function(req, res, next) {
  if(users[req.params.username]){
    next();
  }else{
    next(new Error(req.params.username + ' does not exist.'));
  }
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/:username', function(req, res, next) {
  // user is exits.
  res.send(JSON.stringify(users[req.params.username]));
});

router.put('/:username', function(req, res, next) {
  res.send('Done.');
});

module.exports = router;
