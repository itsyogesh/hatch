'use strict';

hatch.controller('loginController', ['$scope', 'auth', 'alert', 
	function($scope, auth, alert){

	$scope.submit = function(){
		
		var user = {
			email: $scope.email,
			password: $scope.password
		};

		auth.login(user)
			.success(function(res){
				alert('success', 'Welcome', 'Thanks for coming back ' + user.email + '!');

			})
			.error(function(err){
				alert('warning', 'Something went wrong :(', err.message);
			});
	}

	$scope.google = function(){
		auth.googleAuth().then();
	}
}]);