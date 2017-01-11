var express = require('express');
var api3 = express.Router();

api3.get('/:name', function(req, res) {
	res.send(req.params.name);
})

module.exports = api3;