var express = require('express');
var api4 = express.Router();

api4.get('/', function(req, res) {
	res.send('Hello World4');
})

module.exports = api4;