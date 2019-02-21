'use strict';


var mongoose = require('mongoose'),
    User = mongoose.model('Users');



exports.login = function(req, res) {
  User.findOne({username:req.params.username,password:req.params.password}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.create_an_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

