
var User = require('../models/user');
var userRouter = require('express').Router();
var jwt = require('../services/jwt');

var userRoute = {

	postUsers: function(req, res){
		console.log(req.body);
		var user = new User({
			email: req.body.email,
			password: req.body.password
		});

		var payload = {
			iss: req.hostname,
			sub: user._id
		}

		var token = jwt.encode(payload, 'secret_message');

		user.save(function(err){
			if(err){
				return res.send(err);
			}

			return res.status(200).json({
				message: 'Successfully saved user',
				token: token
			});
		});
	},

	getUsers: function(req, res){
		User.find(function(err, users){
			if(err){
				res.send(err);
			}

			res.status(200).json(users);
		});
	}
};

userRouter.route('/register').post(userRoute.postUsers);

module.exports = userRouter;