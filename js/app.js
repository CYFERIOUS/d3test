var app = angular.module('maps',[]);
app.controller("test",function(){

	var canvas = d3.select("body")
		.append("svg")
		.attr("width", 100)
		.attr("height",100);

	var rectangle = canvas.append("rect")
						.attr("width",100)
						.attr("height",60)
						.attr("fill","blue");

});