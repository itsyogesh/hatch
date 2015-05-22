var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

//User Schema
var UserSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true
	},

	password: {
		type: String,
		required: true
	}
});

UserSchema.pre('save', function(next){
	var user = this;
	if(!user.isModified('password')){
		return next();
	}

	bcrypt.genSalt(10, function(err, salt){
		if(err){
			return next(err);
		}

		bcrypt.hash(user.password, salt, null, function(err, hash){
			if(err){
				return err;
			}

			user.password = hash;
			next();
		});
	});
});

module.exports = mongoose.model('User', UserSchema);
