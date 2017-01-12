var express = require('express');
var db = require('./db')

var route = express.Router();

route.get('/employee', function(req, res) {
	db.get().collection('employee').find().toArray(function(err, result) {
		res.send(result)
	});
})

route.get('/department', function(req, res) {
	db.get().collection('department').find().toArray(function(err, result) {
		res.send(result)
	});
})

route.get('/employee/:name', function(req, res) {
	let obj = {}
	db.get().collection('employee').find({"name": req.params.name}).toArray(function(err, result) {
		if (err) {
        	console.log(err);
      	} else if (result.length) {
      		obj.name = result[0].name;
      		obj.age = result[0].age;
      	} else {
        	console.log('No document(s) found with defined "find" criteria!');
      	}
	});
	db.get().collection('department').find({"name": req.params.name}).toArray(function(err, result) {
		if (err) {
        	console.log(err);
      	} else if (result.length) {
      		obj.deptName = result[0].deptName;
      		res.send(obj)
      	} else {
        	console.log('No document(s) found with defined "find" criteria!');
      	}
	});
})

route.post('/storedata/:name/:age/:deptName', function(req, res) {
	let name = req.params.name;
	let age = req.params.age;
	let deptName = req.params.deptName;

	db.get().collection('employee').insert({"name": name, "age": age}, function(err, result) {
		if(err)
			res.send('Failed to insert data in employee')
		else {
			db.get().collection('department').insert({"name": name, "deptName": deptName}, function(err, result) {
				if(err)
					res.send('Failed to insert data in department')
				else {
					res.send('Data stored');
				}
			});
		}
	});
})

module.exports = route;