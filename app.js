var express = require('express');

var app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
var initialize = require('./helloblockchain.js');

// initialize.init();
app.post('/vote', function(req, res){
    var candidate = req.body.candidate;
    var vote = req.body.vote
});