var express = require('express');
var api2 = express.Router();

api2.get('/', function(req, res) {
	res.send('Hello World2');
})

module.exports = api2;