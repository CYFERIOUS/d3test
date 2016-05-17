
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

	function donutDrawer(){

	    var chart = c3.generate({
		bindto: $element[0],
		size:{width:600,height:600},
		data: {
	            columns: [
			['Personas que no están en condición de pobreza multidimensional', 54.4],
			['Personas en condición de pobreza multidimensional', 45.6],
	            ],
	            type : 'donut'
		},
		donut:{label:{
		    format: function (value, ratio, id) {
			return d3.format('.1%')(ratio).replace('.',',');
		    }
		}},
		tooltip:{show: false},
	        title: "pobreza por el IPM Ajustado",
		legend:{item:{onclick:function(id){}}}
	    });

	    alert("salio");

	};
	
  return {
 
		d3SVGCircleExample:donutDrawer,
	
  	};
 
})();

DonutModule.d3SVGCircleExample();
	

}]);



