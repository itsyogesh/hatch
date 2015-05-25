'use strict';

hatch.service('auth', ['$http', 'authToken','$state', '$window', 'API_URL', 
	function($http, authToken, $state, $window, API_URL){

	function authSuccess(res){
		authToken.setToken(res.token);
		$state.go('main');
	}

	this.login = function(user){
		var url = API_URL + 'login';
		return $http.post(url, user).success(authSuccess);
	}

	this.register = function(user){
		var url = API_URL + 'register';
		return $http.post(url, user).success(authSuccess);
	}

	this.googleAuth = function(){
		var url = 'https://accounts.google.com/o/oauth2/auth';
		var options = "width=500, height=500, left=" + ($window.outerWidth - 500)/2
		+ ", top=" + ($window.outerHeight - 500)/2.5;
		
		$window.open(url, '', options);
	}
}]);