
var User = require('../models/user');
var userRouter = require('express').Router();
var jwt = require('jwt-simple');

var userRoute = {

	postUsers: function(req, res){
		console.log(req.body);
		var user = new User({
			email: req.body.email,
			password: req.body.password
		});

		user.save(function(err){
			if(err){
				return res.send(err);
			}

			return res.status(200).json({
				message: 'Successfully saved user',
				token: createToken(user, req.hostname)
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
	},

	login: function(req, res){

		User.findOne({email: req.body.email}, function(err, user){
			if(err)
				return res.send(err);

			if(!user){
				return res.status(401).send({message: 'Wrong email/password'});
			}

			user.comparePassword(req.body.password, function(err, isMatch){
				if(err){
					return res.send(err);
				}

				if(!isMatch){
					return res.status(401).send({message: 'Wrong email/password'});
				}

				return res.status(200).json({
					user: user,
					token: createToken(user, req.hostname)
				});
			});

		});
	}
};

function createToken(user, host){
	var payload = {
		sub: user.id
	}
	var token = jwt.encode(payload, 'secret_message');

	return token;
}

userRouter.route('/register').post(userRoute.postUsers);
userRouter.route('/login').post(userRoute.login);

module.exports = userRouter;