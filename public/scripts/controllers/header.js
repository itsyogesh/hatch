'use strict';

hatch.controller('headerController', ['$scope','authToken', function($scope, authToken){
	$scope.isAuthenticated = authToken.isAuthenticated;
}]);