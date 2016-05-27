var app = angular.module('testMod', []);
app.controller('testCtrl',testCtrl);
testCtrl.$inject = ['$scope'];
function testCtrl($scope){
	console.log($scope.data);
}
