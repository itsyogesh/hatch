'use strict';

hatch.controller('loginController', ['$scope', '$http', 'authToken', 'alert', 'API_URL', 
	function($scope, $http, authToken, alert, API_URL){

	$scope.submit = function(){
		var url = API_URL + 'login';
		
		var user = {
			email : $scope.email,
			password: $scope.password
		};

		$http.post(url, user)
			.success(function(res){
				alert('success', 'Welcome', 'Thanks for coming back ' + user.email + '!'); 
				authToken.setToken(res.token);
			})
			.error(function(err){
				alert('warning', 'Something went wrong :(', err.message);
			});
	}
}]);