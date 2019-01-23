/*
 * @Author: James 
 * @Date: 2018-12-04 09:24:04 
 * @Last Modified by:   James 
 * @Last Modified time: 2018-12-04 09:24:04 
 */

var mongoose = require('../common/db');

var mail = new mongoose.Schema({
    fromUser:String,
    toUser:String,
    title:String,
    context:String
});

mail.statics.findByToUserId = function(user_id, callback) {
    this.find({toUser: user_id}, callback);
}

mail.statics.findByFromUserId = function(user_id, callback) {
    this.find({fromUser: user_id}, callback);
}

var mailModel = mongoose.model('mail', mail);
module.exports = mailModel;