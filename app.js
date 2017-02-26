var express = require('express');

var app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


// initialize.init();
app.get('/' ,function(req, res){
	res.send('Hello world');
})
app.post('/vote', function(req, res){
    var candidate = req.body.candidate;
    var vote = req.body.vote;

    
    var initialize = require('./helloblockchain.js');

});


app.use(express.static(__dirname));



var port = process.env.PORT || 8080
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});