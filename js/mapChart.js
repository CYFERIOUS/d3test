app.directive('mapChart',mapChart).controller('mapCtrl',mapCtrl);


function mapChart(){

	var mapFrame = {

		restrict:'A',
		scope:{

			data: '@'
		},
		controller:'mapCtrl',

	};

	return mapFrame;

};
mapCtrl.$inject = ['$scope','$element'];
function mapCtrl($scope,$element){

	console.log($scope.data);
		

}