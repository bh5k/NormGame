function resultsController($rootScope, $location) {
	if($rootScope.score == null)
		$location.path("/results");
	var ctrl = this;

	ctrl.score = $rootScope.score;
	ctrl.numQuestions = $rootScope.numQuestions;
	if(ctrl.score > 8){
		ctrl.message = "Nicely done! You really know your norms!";
	} else {
		ctrl.message = "Could have been better. Maybe you should brush up on your norms?";
	}
}

angular.module('normGame').component('results', {
	templateUrl: '/components/results.html', 
	controller: resultsController, 
	bindings: {
	}
});