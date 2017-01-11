var express = require('express');
var api3 = express.Router();

api3.get('/', function(req, res) {
	res.send('Hello World3');
})

module.exports = api3;