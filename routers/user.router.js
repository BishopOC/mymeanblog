var express = require('express');
var router = express.Router();
var modelUser = require('../models/user.model');

router.post('/signup', function(req, res){
  var newUser = new modelUser(req.body);
  newUser.save(function(err){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(201).json({
        msg: 'Successfully created a new user'
      });
    }
  });
});

router.post('/login', function(req, res){
  var user = new modelUser(req.body);
  user.save(function(err){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(201).json({
        msg: 'Succesfully logged in'
      });
    }
  });
});

router.get('/users', function(req, res){
  modelUser.find({}, function(err, docs){
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(200).json({
        user: docs
      });
    }
  });
});

router.get('/users/:id', function(req, res){
  modelUser.find({_id: req.params.id}, function(err, docs){
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(200).json({
        user: docs
      });
    }
  });
});

router.put('/users/:id', function(req,res){
  modelUser.findOneAndUpdate({_id:req.params.id}, req.body, function(err, document){
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully updated'
      });
     }
  });
});

router.delete('/users/:id', function(req, res){
  modelUser.remove({_id: req.params.id}, function(err){
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully deleted'
      });
    }
  });
});

module.exports = router;
