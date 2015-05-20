'use strict';

hatch.directive('confirmPassword', function(){
	return {
		require: 'ngModel',
		link: function(scope, element, attrs, ngModelCtrl){
			
			function validate(value){
				var valid = (value === scope.$eval(attrs.confirmPassword));
				ngModelCtrl.$setValidity('equal', valid);
				return valid ? value : undefined;
			}

			ngModelCtrl.$parsers.push(validate);
			ngModelCtrl.$formatters.push(validate);

			scope.$watch(attrs.confirmPassword, function(){
				ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
			});
		}
	}
});