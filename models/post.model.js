var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
  title: {type:String, required:true},
  body: {type:String, required:true},
  created: {type:Date, default:Date.now},
  updated: {type:Date, default:Date.now},
});

var postModel = mongoose.model('postModel', postSchema);
module.exports = postModel;
