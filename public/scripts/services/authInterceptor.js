'use strict';

hatch.factory('authInterceptor', ['authToken', function(authToken){
	return {
		request: function(config){
			var token = authToken.getToken();
			console.log(token);
			if(token){
				config.headers.Authorization = 'Bearer ' + token;
				console.log('token available');
			}

			return config;
		},

		response: function(response){
			return response;
		}
	};
}])