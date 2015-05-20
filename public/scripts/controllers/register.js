'use strict';

hatch.controller('registerController', ['$scope', '$http', 'alert', function($scope, $http, alert){
	
	$scope.submit = function(){
		var url = '/';
		var user = {};
		$http.post(url, user)
			.success(function(res){

			})
			.error(function(err){
				alert('warning', 'Oops!', 'Could not register.');
			});
	}

}]);