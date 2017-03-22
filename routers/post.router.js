var express = require('express');
var router = express.Router();
var modelPost = require('../models/post.model');

router.get('/posts', function(req, res){
  modelPost.find({}, function(err, docs){
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(200).json({
        post: docs
      });
    }
  });
});

router.get('/posts/:id', function(req, res){
  modelPost.find({_id: req.params.id}, function(err, docs){
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(200).json({
        post: docs
      });
    }
  });
});

router.post('/posts', function(req, res){
  var post = new modelPost(req.body);
  post.save(function(err){
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(201).json({
        msg: 'Succesfully posted'
      });
    }
  });
});

router.put('/posts/:id', function(req, res){
  modelPost.findOneAndUpdate({_id:req.params.id}, req.body, function(err, document){
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(200).json({
        msg: 'Succesfully updated'
      });
    }
  });
});

router.delete('/posts/:id', function(req, res){
  modelPost.remove({_id: req.params.id}, function(err){
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
