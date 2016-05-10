
var app = angular.module('maps',[]);

app.directive('mapColombia', function(){

var TestModule = (function () {
 
 
	var drawCircle = function(){
		var canvas1 = d3.select("body")
		.append("svg")
		.attr("width", 200)
		.attr("height",200);

		var circle = canvas1.append("circle")
							.attr("cx",100)
							.attr("cy",100)
							.attr("r",50)
							.attr("fill","#000");
	};
	var drawRectangle = function(){
		var canvas2 = d3.select("body")
		.append("svg")
		.attr("width", 200)
		.attr("height",200);
		var rectangle = canvas2.append("rect")
							.attr("width",100)
							.attr("height",60)
							.attr("fill","red");

	};
	
 
  return {
 
		d3SVGCircleExample:drawCircle,
		d3SVGRectangleExample:drawRectangle,
  	};
 
})();

/*angular*/


	return{
		restrict:'E',
		templateUrl:'../directives/map-colombia.html',
		controller: function(){

			var circulo = TestModule.d3SVGCircleExample();
			var rectangulo = TestModule.d3SVGRectangleExample();

		},
		controllerAs:'view'

	};

});



