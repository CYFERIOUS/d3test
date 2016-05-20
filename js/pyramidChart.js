
var app = angular.module('maps',[]);
app.directive('pyramidChart',pyramidChart).controller('pyramidCtrl',pyramidCtrl);


function pyramidChart(){

	var pyramidFrame = {

		restrict:'A',
		scope:{

			data: '@'
		},
		controller:'pyramidCtrl',

	};

	return pyramidFrame;

};
pyramidCtrl.$inject = ['$scope','$element'];
function pyramidCtrl($scope,$element){

	console.log($scope.data);
		

}




