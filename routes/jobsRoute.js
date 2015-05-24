var jobsRouter = require('express').Router();
var jwt = require('jwt-simple');

var jobs = ['Superman', 'Batman', 'Spiderman', 'Ironman', 'Thor'];

var jobsRoute = {

	getJobs: function(req, res){
		if(!req.headers.authorization){
			return res.status(401).send({message: 'You are not authorized'});
		}

		var token = req.headers.authorization.split(' ')[1];
		var payload = jwt.decode(token, 'secret_message');

		if(!payload.sub){
			res.status(401).send({message: 'Authentication failed'});
		}

		return res.json(jobs);
	}

};

jobsRouter.route('/jobs').get(jobsRoute.getJobs);

module.exports = jobsRouter;


