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

exports.decode = function(jwt, secret){
	var segments = jwt.split('.');

	if(segments.length !== 3){
		throw new Error("Incorrect token");
	}

	var header = JSON.parse(base64decode(segments[0]));
	var payload = JSON.parse(base64decode(segments[1]));

	var rawSignature = segments[0] + '.' + segments[1];

	if(!verify(rawSignature, secret, segments[2])){
		throw new Error("Verification failed");
	}

	return payload;
}

function verify(raw, secret, signature){
	return signature === sign(raw, secret);
}

function base64encode(str){
	return new Buffer(str).toString('base64');
}

function base64decode(str){
	return new Buffer(str, 'base64').toString();
}

function sign(jwt, key){
	return crypto.createHmac('sha256', key).update(jwt).digest('base64');
}