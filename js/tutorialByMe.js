$( document ).ready(function() {
	
var testModule = (function () {
 
  var privao = 0;
 
  return {
 
    d3ModuleExample: function () {
     	console.log("its working motherfuckers!");
    },
	d3SelectExample:function() {
		 d3.select("a").text("popo y titi");
	},
	d3AppendExample:function(){
		d3.select("body").append("p").text("well done!");
	}
  };
 
})();

	testModule.d3ModuleExample();
	testModule.d3SelectExample();
	testModule.d3AppendExample();
   
});

