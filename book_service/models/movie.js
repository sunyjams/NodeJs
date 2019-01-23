var mongoose = require('../common/db');

var movie = new mongoose.Schema({
    movieName:String,
    movieImg:String,
    movieVideo:String,
    movieDownload:String,
    movieTime:String,
    movieNumSuppose:Number,
    movieNumDownload:Number,
    movieMainPage:Boolean
})

movie.statics.findById = function(m_id, callback) {
    this.find({_id:m_id}, callback);
}

movie.statics.findByName = function(m_name, callback) {
    this.find({movieName:m_name}, callback);
}

var movieModel = mongoose.model('movie', movie);
module.exports = movieModel;