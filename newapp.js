
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });


var express = require('express');
var app = express();

var bodyParser = require('body-parser')


app.use('/', function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
})

app.use(bodyParser.urlencoded({ extended: false }))