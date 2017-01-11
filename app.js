var express = require('express');
var app = express();
var route = require('./route');

app.use('/', route);

app.listen(3000, function() {
	console.log('Server started: Listening at port 3000')
})

module.exports = app;