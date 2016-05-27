var app = angular.module('maps');
app.directive('test.controller',testChart).controller('testCtrl',testCtrl);


function testChart(){

	var testFrame = {

		restrict:'A',
		scope:{

			data: '@'
		},
		controller:'testCtrl',

	};

	return testFrame;

};
testCtrl.$inject = ['$scope','$element'];
function testCtrl($scope,$element){

	console.log($scope.data);
		

}
