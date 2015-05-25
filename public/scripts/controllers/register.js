'use strict';

hatch.controller('registerController', ['$scope', 'auth', 'alert',
	function($scope, auth, alert){
	
	$scope.submit = function(){
		var url = API_URL + 'register';
		
		var user = {
			email : $scope.email,
			password: $scope.password
		};

		auth.post(user)
			.success(function(res){
				alert('success', 'OK!', 'Account Created! Thank you for registering ' + user.email + '!');
			})
			.error(function(err){
				alert('warning', 'Oops!', 'Could not register.');
			});
	}

}]);