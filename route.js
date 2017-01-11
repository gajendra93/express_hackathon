var express = require('express');
var route = express.Router();

route.get('/employee', function(req, res) {
	res.send('Employee');
})

route.get('/department', function(req, res) {
	res.send('Department');
})

route.get('/employee/name/:name', function(req, res) {
	res.send('Filter');
})

route.get('/storedata', function(req, res) {
	res.send('store');
})

module.exports = route;