/*
 * @Author: James 
 * @Date: 2018-12-04 09:24:31 
 * @Last Modified by: James
 * @Last Modified time: 2018-12-08 10:54:36
 */

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var recommend = require('../models/recommend');
var movie = require('../models/movie');
// var article = require('../models/article');
var user = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * 测试数据
 */
router.get('/mongooseTest', function (req, res, next) {
  mongoose.connect('mongodb://localhost/pets');
  mongoose.Promise = global.Promise;
  var Cat = mongoose.model('Cat', {name:String});
  var tom = new Cat({name:'Bilibili'});
  tom.save(function(err) {
    if(err){
      console.log(err);
    }else{
      console.log('success insert');
    }
  });
  res.send('数据库连接测试');
});

router.get('/showIndex',function(req, res, next) {
  recommend.findAll(function(err, getRecommend) {
    res.json({status:0, message:"get recommend", data:getRecommend});
  })
});

router.get('/showRanking', function(req, res, next) {
  
});

router.get('/showArticle', function(req, res, next) {
  
});

router.get('/articleDetail', function (req, res, next) {
  
});

router.get('/showUser', function(req, res, next) {
  
});

module.exports = router;
