'use strict';

hatch.factory('authToken', ['$window', function ($window) {
	var storage = $window.localStorage;
	var cachedToken;
	var userToken = 'userToken';

	var authToken = {
		setToken: function(token){
			cachedToken = token;
			storage.setItem(userToken, token);
		},

		getToken: function(){
			if(!cachedToken){
				cachedToken = storage.getItem(userToken);
			}

			return cachedToken;
		},

		removeToken: function(){
			cachedToken = null;
			storage.removeItem(userToken);
		},

		isAuthenticated: function(){
			return !!authToken.getToken(userToken);
		}
	}

	return authToken;
}]);