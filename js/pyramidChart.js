
var app = angular.module('maps',[]);
app.directive('pyramidChart',pyramidChart).controller('pyramidCtrl',pyramidCtrl);


function pyramidChart(){

	var pyramidFrame = {

		restrict:'A',
		scope:{

			data: '@',
			//grafico:'@',
			//total:'@',
			//etn: '@',

		},
		templateUrl:'../directives/pyramid-chart.html',
		controller:'pyramidCtrl',
		controllerAs:'pyrmd',

	};

	return pyramidFrame;

};

pyramidCtrl.$inject = ['$scope','$element'];
function pyramidCtrl($scope,$element){

	

	//.log($scope.data);

var piramTitles={
	total:'DistribuciÃ³n (%) de los productores residentes en el Ã¡rea rural dispersa censada, segÃºn edad y sexo.',
	etn:'ParticipaciÃ³n (%) de los productores residentes en el Ã¡rea rural dispersa censada, segÃºn edad y sexo en territorio de grupos Ã©tnicos.'
	};
var piram_rural = {};
$(document).ready(function(){
    /** Total ÃƒÂ¡rea rural dispersa censada  */
    d3.csv($scope.data,function (error,datosCSV) {
	var dataCols = ['Hombres','Mujeres','etn_Hombres','etn_Mujeres'];
	piram_rural.max = d3.max(datosCSV, function(d){
	    return dataCols.map(function(key){return d[key]}).reduce(function(p,v){return parseInt(p) > parseInt(v) ? parseInt(p):parseInt(v)})
	});
	piram_rural.total = d3.sum(datosCSV, function(d){return d.Total});
	piram_rural.data = [];
        datosCSV.forEach(function (Edad) {
            piram_rural.data.push({
                edad: parseInt(Edad),
                rango_edad: Edad.Edad,
                total_hombres: parseInt(Edad.Hombres),
		total_mujeres: parseInt(Edad.Mujeres),
		total: parseInt(Edad.Hombres) + parseInt(Edad.Mujeres),
		etn_hombres: parseInt(Edad.etn_Hombres),
		etn_mujeres: parseInt(Edad.etn_Mujeres),
		etn: parseInt(Edad.etn_Hombres) + parseInt(Edad.etn_Mujeres)
		
	    });
        });
	    //document.getElementById('piramide-total').innerHTML = locale_esCo.numberFormat(',')(piram_rural.total);
        //document.getElementsByName("total-nacional")[0].click();      
    });
});
/** PirÃƒÂ¡mide */
$scope.grafico = function(elem){
   // function grafico(elem){
	
    // Borrar grÃ¡fico anterior, para simular la animaciÃ³n
    d3.selectAll("svg").remove();
    //d3.selectAll($element[0]).html($element);
    //document.getElementById('piramide-title').innerHTML ='';
    // GrÃƒÂ¡fico SVG
    var postext = 580;
    var postext2 = 55;
    var etiedad = 340;
    var bar = 380;
    var pixelesAncho = 720;
    var puntoCentral = pixelesAncho / 3;
    var puntoEdad = puntoCentral * 2 - 50;
    var anchoBarra = 18;
    var offsetY = 25;
    var pixelesAlto = piram_rural.data.length * offsetY;
    //document.getElementById('piramide-title').innerHTML = piramTitles[elem.value];
    var svg = d3.select($element[0]).append("svg")
        .attr('height', pixelesAlto)
        .attr('width', pixelesAncho)
        .attr('class', 'piramide');
   //d3.selectAll("svg").remove();
    // Escala x para tamaÃƒÂ±o de barras
    var x = d3.scale
        .linear()
        .domain([0, piram_rural.max/piram_rural.total])
        .range([0, puntoCentral]);
    // Dibujado por rango de edad
    piram_rural.data.forEach(function (d, i) {
        dibujarEdad(d, i);
    });
    function dibujarEdad(data, posicion, es_etn) {
        var espacioEtiquetasX = 5;
        var espacioEtiquetasY = 15;
	var total_hombres = data[elem.value+'_hombres'];
	var total_mujeres = data[elem.value+'_mujeres'];
	
        // barra mujeres
	var mujBarWidth = x(total_mujeres/piram_rural.total);
	var mujBars = svg.append('rect')
            .attr('x', bar)
            .attr('y', posicion * offsetY)
	    .attr('width',0)
            .attr('height', anchoBarra)
            .attr('class', 'barraMujeres');        
	mujBars.transition()
            .attr('width', mujBarWidth)
	    .duration(2000);

        var mujBarsText = svg.append('text')
            .attr('x',puntoEdad-45)
            .attr('y', (posicion * offsetY) + espacioEtiquetasY)
            .attr('class', 'etiquetaMujeres')
            .text(formatNumberPiramide(total_mujeres/piram_rural.total));
	mujBarsText.transition()
	    .attr('x',puntoEdad-45+mujBarWidth)
	    .duration(2000);
        // barra hombres
	var homBarsWidth = x(total_hombres/piram_rural.total);
	var homBars = svg.append('rect')
            .attr('x', puntoCentral-60)// - x(total_hombres))
            .attr('y', posicion * offsetY)
            .attr('width', 0)
	// Hack: 2*puntoCentral, need to change to a proper way
	    .attr('transform', translation(2*puntoCentral, 0) + ' scale(-1,1)') 
            .attr('height', anchoBarra)
            .attr('class', 'barraHombres');
        homBars.transition()
            .attr('width', homBarsWidth)
	    .duration(2000);

        var homBarsText = svg.append('text')
	    .attr('x',puntoCentral+20)
            .attr('y', (posicion * offsetY) + espacioEtiquetasY)
            .attr('class', 'etiquetaHombres')
	    .text(formatNumberPiramide(total_hombres/piram_rural.total));
	homBarsText.transition()
	    .attr('x', puntoCentral+20-homBarsWidth)
	    .duration(2000);
        // etiqueta rango de edades
        var txt = data.rango_edad;
        svg.append('text')
            .attr('x', etiedad)
            .attr('y', (posicion * offsetY) + espacioEtiquetasY)
	    .attr('text-anchor','middle')
            .attr('class', 'etiquetaEdad')
            .text(txt);
    }
}
// so sick of string concatenation for translations
function translation(x,y) {
    return 'translate(' + x + ',' + y + ')';
}

function formatNumberPiramide(n){
    return d3.format('.1%')(n).replace('.',',');
}
  }