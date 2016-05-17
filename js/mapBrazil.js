var app = angular.module('maps',[]);
app.directive('mapBrazil', function(){
	return{
		restrict:'E',
		templateUrl:'../directives/map-brazil.html',
		controller: 'mapsBra',
		controllerAs:'view'

	};

});

app.controller('mapsBra', function(){

var TestModule2 = (function () {

	var canvas1 = d3.select("#mepo")
		.append("svg")
		.attr("width", 800)
		.attr("height",200)
		.style("background-color", 'red');
 
 
	var drawCircle = function(){


		var circle = canvas1.append("circle")
							.attr("cx",100)
							.attr("cy",100)
							.attr("r",50)
							.attr("fill","blue");
	};
	var drawRectangle = function(){
		
		var rectangle = canvas1.append("rect")
							.attr("width",100)
							.attr("height",60)
							.attr("fill","green");

	};
	
  return {
 
		d3SVGCircleExample:drawCircle,
		d3SVGRectangleExample:drawRectangle,
  	};
 
})();

	var circulo = TestModule2.d3SVGCircleExample();
	var rectangulo = TestModule2.d3SVGRectangleExample();

});