var express = require('express'),
    app = express(),
    //port = process.env.PORT || 7000,
    mongoose = require('mongoose'),
    Item = require('./api/model/tfsitemmodel'),
    User = require('./api/model/tfsusermodel'),//created model loading here
    bodyParser = require('body-parser');

	app.set('view engine', 'ejs')

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://tfs:Turing%234321@cluster0-shard-00-00-omg4j.mongodb.net:27017,cluster0-shard-00-01-omg4j.mongodb.net:27017,cluster0-shard-00-02-omg4j.mongodb.net:27017/tfs?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/route/tfsroute'); //importing route
routes(app); //register the route


//app.listen(port);
app.listen(7000);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


console.log('TFS RESTful API server started on: ' + 7000);