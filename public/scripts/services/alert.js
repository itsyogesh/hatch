'use strict';

hatch.service('alert', ['$rootScope', '$timeout', function($rootScope, $timeout){
	return function(type, title, message, timeout){

		var alertTimeout;

		$rootScope.alert = {
			hasBeenShown: true,
			show: true,
			type: type,
			title: title,
			message: message
		};

		$timeout.cancel(alertTimeout);

		alertTimeout = $timeout(function(){
			$rootScope.alert.show = false;
		}, timeout || 2000)
	}

}]);