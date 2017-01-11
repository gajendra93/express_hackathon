var express = require('express');
var api1 = express.Router();

api1.get('/', function(req, res) {
	res.send('Hello World1');
})

module.exports = api1;