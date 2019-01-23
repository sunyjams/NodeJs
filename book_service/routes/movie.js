var express = require('express');
var router = express.Router();
var movie = require('../models/movie');

router.post('/add', function(req, res, next) {
    if(!req.body.movie_name){
        res.json({status:1, message:'movie name can not be empty'});
    }
    if(!req.body.movie_img){
        res.json({status:1, message:'movie img can not be empty'});
    }
    if(!req.body.movie_video){
        res.json({status:1, message:'movie video can not be empty'});
    }
    if(!req.body.movie_download){
        res.json({status:1, message:'movie downlaod url can not be empty'});
    }
    if(!req.body.movie_time){
        res.json({status:1, message:'movie time can not be empty'});
    }
    movie.findByName(req.body.movie_name, function(err, movieSave) {
        if(movieSave.length == 0){
            var addMovie = new movie({
                movieName:req.body.movie_name,
                movieImg:req.body.movie_img,
                movieVideo:req.body.movie_video,
                movieDownload:req.body.movie_download,
                movieTime:req.body.movie_time,
                movieNumSuppose:0,
                movieNumDownload:0,
                movieMainPage:false
            });
            addMovie.save(function() {
                res.json({status:0, message:'添加成功'});
            });
        }else{
            res.json({status:1, message:'已经保存了同名电影'});
        }
    });
});

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
})

module.exports = router;