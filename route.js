var express = require('express');
var operations = require('./operations');

var route = express.Router();

route.get('/employee', function(req, res) {
	res.send('Employee');
})

route.get('/department', function(req, res) {
	res.send('Department');
})

route.get('/employee/name/:name', function(req, res) {
	var data = operations.getEmployee(req.params.name);
	res.send(data);
})

route.get('/storedata', function(req, res) {
	res.send('store');
})

module.exports = route;