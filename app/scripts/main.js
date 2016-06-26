$(document).on("ready", function() { 
	$("body").mCustomScrollbar({
		theme:"minimal"
	});
	var trabajos = [];
	var contador = 1;
	$.ajax({
		type: "GET",
		url: "data-portafolio.json",
		success: function(data){
			trabajos = data;
			dibujar(data, contador)
		}
	})

	var dibujar = function(datos, posicion) {
		datos["grupo" + posicion].map(function(itemWork){
			$("#myWork").append("<li><a class='example-image-link' href='" + itemWork.imagen + "' data-lightbox='example-set' data-title='" + itemWork.name + itemWork.description + itemWork.url + "'><img class='example-image' src='" + itemWork.thumb + "' alt=''/></a></li>")
		})
		contador = contador + 1;
	} 

	$("#showWork").click(function(){
		dibujar(trabajos, contador);
	})

	$("#primaryMenu").click(function(){
		$("#principalNav").fadeIn(500);
		$("html").css("overflow", "hidden");
	})
	$("#closeNav").click(function(){
		$("#principalNav").fadeOut(500)
		$("html").css("overflow", "auto");
	})

})