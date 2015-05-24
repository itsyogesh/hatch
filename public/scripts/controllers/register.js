'use strict';

hatch.controller('registerController', ['$scope', '$http', 'alert', 'authToken', 'API_URL',
	function($scope, $http, alert, authToken, API_URL){
	
	$scope.submit = function(){
		var url = API_URL + 'register';
		
		var user = {
			email : $scope.email,
			password: $scope.password
		};

		$http.post(url, user)
			.success(function(res){
				alert('success', 'OK!', 'Account Created! Thank you for registering ' + user.email + '!');
				authToken.setToken(res.token);
			})
			.error(function(err){
				alert('warning', 'Oops!', 'Could not register.');
			});
	}

}]);