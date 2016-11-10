angular.module("normGame", ['ngRoute', 'ngAnimate'])
.config(['$routeProvider', '$locationProvider', 
	function($routeProvider, $locationProvider){
		$routeProvider
			.when('/', {
				template: '<welcome></welcome>'
			})
			.when('/quiz', {
				template: '<slide></slide>'
			})
			.when('/results', {
				template: '<results></results>'
			});

		$locationProvider.html5Mode(true);
	}]);