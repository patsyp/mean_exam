var app = angular.module('app', ['ngRoute', 'ngCookies'])

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/sign_in.html',
		controller: 'UsersController as UC'
	})
	.when('/dashboard', {
		templateUrl: 'partials/dashboard.html',
		controller: 'UsersController as UC'
	})
	.when('/new_question', {
		templateUrl: 'partials/new_question.html',
		controller:'UsersController as UC'
	})
	.when('/question/show/:id', {
		templateUrl: 'partials/show_question.html',
		controller: 'UsersController as UC'
	})
	.when('/new_answer/:id', {
		templateUrl: 'partials/new_answer.html',
		controller: 'UsersController as UC'
	})
	// .otherwise({redirectTo: '/'})
})