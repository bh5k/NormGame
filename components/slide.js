function slideController($http) {
	var ctrl = this;
	var questions = [];
	var count = 0;
	
	$http.get("/questions.json")
		.then(function(response){
			questions = response.data.questions;
			newQuestion();
		});

	ctrl.selection = "";

	ctrl.checkAnswer = function(){
		/*if(ctrl.selection == correctAnswer){
			ctrl.results = ctrl.correctMessage;
		} else {
			ctrl.results = ctrl.incorrectMessage;
		}*/
		ctrl.enableNext = true;
		ctrl.enableGo = false;
	}
	ctrl.nextQuestion = function(){newQuestion()};

	function newQuestion(){
		ctrl.info = questions[count++];
		ctrl.enableGo = true;
		ctrl.enableNext = false;
	}
}

angular.module('normGame').component('slide', {
	templateUrl: '/components/slide.html', 
	controller: slideController, 
	bindings: {
		info: '<', 
		selection: '&', 
		results: '<'
	}
});