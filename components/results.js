function resultsController($rootScope, $location, $http) {
	if(!isFinite($rootScope.score)) {
		$location.path("index.html");
	}
	var ctrl = this;

	ctrl.score = $rootScope.score;
	ctrl.numQuestions = $rootScope.numQuestions;
	ctrl.submitText = "Submit";
	if(ctrl.score > 8){
		ctrl.message = "Nicely done! You really know your norms!";
	} else {
		ctrl.message = "Could have been better. Maybe you should brush up on your norms?";
	}

	ctrl.submit = function(){
		if(ctrl.submitText == "Submit") {
			$http.post("api.php", [ctrl.email, ctrl.score])
				.then(function(response){
					ctrl.submitText = "Got it!";
				});
		}
	}
}

angular.module('normGame').component('results', {
	templateUrl: 'components/results.html', 
	controller: resultsController, 
	bindings: {
	}
});