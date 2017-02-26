var express = require('express');
var bodyparser = require('')
var app = express();
var initialize = require('./helloblockchain.js');

// initialize.init();
app.post('/vote', function(req, res){
    var candidate = req.body.candidate;
    var vote = req.body.vote
}