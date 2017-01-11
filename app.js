var express = require('express');
var app = express();
var api1 = require('./api1');
var api2 = require('./api2');
var api3 = require('./api3');

app.use('/api1', api1);

app.use('/api2', api2);

app.use('/api3', api3);

app.use('/api4', api4);

app.listen(3000, function() {
	console.log('Server started: Listening at port 3000')
})

module.exports = app;