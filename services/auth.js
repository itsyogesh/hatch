var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user.js');

var localStrategy = new LocalStrategy({usernameField: 'email'}, 
	function (email, password, callback) {
	
	User.findOne({email: email}, function(err, user){
		if(err){
			return callback(err);
		}

		if(!user){
			return callback(null, false, {message: 'Invalid email/password'});
		}

		user.comparePassword(password, function(err, isMatch){
			if(err){
				return callback(err);
			}

			if(!isMatch){
				console.log('incorrect')
				return callback(null, false, {message: 'Invalid email/password'});
			}

			return callback(null, user);
		});
	});
});


passport.use(localStrategy);

exports.isAuthenticated = passport.authenticate('local');