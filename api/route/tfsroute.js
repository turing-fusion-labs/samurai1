'use strict';
module.exports = function(app) {
  var tfsItemController = require('../controller/tfsitemcontroller');
  var tfsUserController = require('../controller/tfsusercontroller');


  app.get('/', function (req, res) {
    // NEW CODE
    res.render('pages/login');
  })
  
  app.get('/login', function (req, res) {
	  res.render('pages/dashboard');
  });

  app.get('/add', function (req, res) {
	  res.render('pages/addItem');
  });
  
};