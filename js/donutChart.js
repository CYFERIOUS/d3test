
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

	var DonutModule = (function () {

		function donutDrawer(){

			d3.json($scope.data, function(error, json) {
				if (error) return console.warn(error);
				var data = json;
				var chart = c3.generate({
					bindto: $element[0],
					size:{width:600,height:600},
					data: {
						columns: json,
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


			});

		};

		return {

			d3SVGCircleExample:donutDrawer,

		};

	})();

	DonutModule.d3SVGCircleExample();
	

}]);



