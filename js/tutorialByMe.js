$( document ).ready(function() {
	
var testModule = (function () {
 
  
	var canvas = d3.select("body")
		.append("svg")
		.attr("width", 200)
		.attr("height",200);
		
 
  return {
 
    d3ModuleExample: function () {
     	console.log("its an object motherfuckers!");
		console.log(d3);
    },
	d3SelectExample:function() {
		 d3.select("a").text("popo y titi");
	},
	d3AppendExample:function(){
		d3.select("body").append("p").text("well done!");
	},
	d3StyleExample:function(){
		d3.select("body")
			.append("p")
			.style("font-weight","bolder")
			.text("good style!");
	},
	d3SVGCircleExample:function(){		
		var circle = canvas.append("circle")
						.attr("cx",100)
						.attr("cy",100)
						.attr("r",50)
						.attr("fill","#000");
	},
	d3SVGRectangleExample:function(){		
		var rectangle = canvas.append("rect")
						.attr("width",100)
						.attr("height",60)
						.attr("fill","red");
	}
  };
 
})();

	testModule.d3ModuleExample();
	testModule.d3SelectExample();
	testModule.d3AppendExample();
	testModule.d3StyleExample();
	testModule.d3SVGCircleExample();
	testModule.d3SVGRectangleExample();
   
});

