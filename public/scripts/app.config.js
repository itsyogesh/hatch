'use strict';

hatch.config(function($urlRouterProvider, $stateProvider, $httpProvider){

	$urlRouterProvider.otherwise("/");

	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/views/main.html'
	});

	$stateProvider.state('register', {
		url: '/register',
		templateUrl: '/views/register.html',
		controller: 'registerController'
	});

	$stateProvider.state('login', {
		url: '/login',
		templateUrl: '/views/login.html',
		controller: 'loginController'
	});

	$stateProvider.state('jobs', {
		url: '/jobs',
		templateUrl: '/views/jobs.html',
		controller: 'jobsController'
	});

	$stateProvider.state('logout', {
		url: '/logout',
		controller: 'logoutController'
	});

	$httpProvider.interceptors.push('authInterceptor');
})

.constant('API_URL', 'http://localhost:3000/');