'use strict';

hatch.controller('logoutController', ['$state', 'authToken', function($state, authToken){
	authToken.removeToken();
	console.log('error');
	console.log($state);
	$state.go('main');
}]);