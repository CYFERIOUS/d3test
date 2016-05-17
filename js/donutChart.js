
var app = angular.module('maps',[]);

app.directive('donutChart', function(){
		
	var donutFrame = {

		restrict:'A',
		scope:{

			data: '@'
		},
		controller:'donutCtrl',

	};

	return donutFrame;

});

app.controller('donutCtrl', ['$scope','$element',function($scope,$element){

	alert($scope.data);

var DonutModule = (function () {

	var chart = d3.select($element[0]).append("svg").style("background-color","red");

	var drawCircle = function(){

		var circle = chart.append("circle")
							.attr("cx",100)
							.attr("cy",100)
							.attr("r",50)
							.attr("fill","blue");
	};
	
  return {
 
		d3SVGCircleExample:drawCircle,
	
  	};
 
})();

$scope.sendForm = DonutModule.d3SVGCircleExample();
	

}]);



