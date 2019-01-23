/**
 * 
 */

 var exress = require('express');
 var router = express.Router();
 var user = require('../models/user');
 var movei = require('../models/movie');

router.post('/movieAdd', function (req, res, next) {
    if(!req.body.username){
        res.json({status:1, message:'用户名为空'});
    }
    if(!req.body.token){
        res.json({status:1, message:'登录出错'});
    }
    if(!req.body.id){
        res.json({status:1, message:'用户传递错误'});
    }
    if(!req.body.movieName){
        res.json({status:1, message:'电影名称为空'});
    }
    if(!req.body.movieImg){
        res.json({status:1, message:'电影图片为空'});
    }
    if(!req.body.movieDownload){
        res.json({status:1, message:'电影下载地址为空'});
    }
    if(!req.body.movieMainPage){
        var movieMainPage = false
    }
    var check = checkAdminPower(req.body.username, req.body.token, req.body.id);
    if(check.error == 0){
        user.findByUsername(req.body.username, function(err, findUser) {
            if(findUser[0].userAdmin && !findUser[0].userStop){
                var saveMovie = new movie({
                    movieName: req.body.movieName,
                    movieImg:req.body.movieImg,
                    movieVideo:req.body.movieVideo,
                    movieDownload:req.body.movieDownload,
                    movieTime:Date.now(),
                    movieNumSuppose:0,
                    movieNumDownload:0,
                    movieMainPage:movieMainPage,
                });
                saveMovie.save(function(err) {
                    if(err){
                        res.json({status:1, message:err});
                    }else{
                        res.json({status:0, message:'添加成功'});
                    }
                });
            }else{
                res.json({status:1, message:"用户没用获得全选或者已经停用"});
            }
        })
    }else{
        res.json({status:1, message:check.message});
    }
});