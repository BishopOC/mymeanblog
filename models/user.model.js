var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  email: {type:String, unique:true},
  name: {type:String, required:true},
  password: {type:String, required:true},
});

var userModel = mongoose.model('userModel', userSchema);
module.exports = userModel;
