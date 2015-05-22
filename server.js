'use strict';

var app = require('express')();
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');

var userRouter = require('./routes/userRoute');

mongoose.connect('mongodb://localhost:27017/hatch');
console.log('connected to morgan');

//Using logger
app.use(logger('dev'));

//Using boddy parser
app.use(bodyParser.json());

app.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

	next();
});

//user routes
app.use('/', userRouter);

var port = process.env.PORT || 3000;

app.listen(port);
console.log('server started on ' + port);




