function slideController($scope, $http, $location, $rootScope) {
	var ctrl = this;
	var questions = [];
	var answered = false;
	ctrl.count = 0;

	$http.get("/questions.json")
		.then(function(response){
			questions = response.data.questions;
			newQuestion();
		});

	ctrl.selection = "";
	ctrl.nextText = "Next Question";
	$rootScope.score = 0;

	$scope.$watch(function(){
		return ctrl.selection;
	}, function(){
		if(ctrl.selection != "")
			checkAnswer();
	});

	function checkAnswer(){
		if(!answered) {
			if(ctrl.selection == ctrl.info.answers[ctrl.info.correctAnswer]){
				ctrl.feedback = ctrl.info.correctMessage;
				ctrl.result = "correct";
				$rootScope.score++;
			} else {
				ctrl.feedback = ctrl.info.incorrectMessage;
				ctrl.result = "incorrect";
			}
			ctrl.showResults = true;
			answered = true;
		}
	};

	ctrl.nextQuestion = function(){
		if(questions[ctrl.count] != null){
			newQuestion();
		} else {
			$location.path("/results");
		}
	};

	function newQuestion(){
		ctrl.info = questions[ctrl.count++];
		ctrl.result = "";
		ctrl.showResults = false;
		answered = false;
		if(questions[ctrl.count] == null){
			ctrl.nextText = "Get Results";
		}
	}
}

angular.module('normGame').component('slide', {
	templateUrl: '/components/slide.html', 
	controller: slideController, 
	bindings: {
		info: '<', 
		selection: '&', 
		result: '<', 
		nextText: '<'
	}
});