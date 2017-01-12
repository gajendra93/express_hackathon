var express = require('express');
var app = express();
var route = require('./route');
var db = require('./db')

app.use('/', route);

db.connect('mongodb://127.0.0.1:27017/hackathon', function(err) {
	if (err) {
		console.log('Unable to connect to Mongo')
	}
	else {
		console.log("Connected to Database");
		app.listen(3000, function() {
			console.log('Server started: Listening at port 3000')
		})
	}
});

module.exports = app;
