
app.directive('donutChart',donutChart).controller('donutCtrl',donutCtrl);
donutCtrl.$inject = ['$scope','$element'];

function donutChart(){

	var donutFrame = {

		restrict:'A',
		scope:{

			data: '@'
		},
		controller:'donutCtrl',

	};

	return donutFrame;

};

function donutCtrl($scope,$element){
		
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
}

