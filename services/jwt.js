var crypto = require('crypto');

exports.encode = function(payload, secret){
	var algorithm = "HS256";
	
	var header = {
		typ: 'JWT',
		alg: algorithm
	}

	var jwt = base64encode(JSON.stringify(header)) + '.' + base64encode(JSON.stringify(payload));
	return jwt + '.' + sign(jwt, secret);

}

function base64encode(str){
	return new Buffer(str).toString('base64');
}


function sign(jwt, key){
	return crypto.createHmac('sha256', key).update(jwt).digest('base64');
}