/*
 * @Author: James 
 * @Date: 2018-12-04 09:23:54 
 * @Last Modified by: James
 * @Last Modified time: 2018-12-08 10:59:20
 */

var mongoose = require('../common/db');

var recommend = new mongoose.Schema({
    recommendImg:String,
    recommendSrc:String,
    recommendTitle:String
});

recommend.statics.findByIndexId = function(m_id, callback) {
    this.find({findByIndoexId:m_id}, callback);
}

recommend.static.findAll = function(callback) {
    this.find({}, callback);
}

var recommendModel = mongoose.model('rencommend', recommend);
module.exports = recommendModel