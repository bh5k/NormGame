function resultsController($rootScope) {
	var ctrl = this;

	ctrl.score = $rootScope.score;
	if(ctrl.score > 1){
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