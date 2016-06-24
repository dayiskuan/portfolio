$(document).on("ready", function() { 
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
			$("#myWork").fadeIn(3000).append("<li><a class='example-image-link' href='" + itemWork.imagen + "' data-lightbox='example-set' data-title='" + itemWork.name + itemWork.description + itemWork.url + "'><img class='example-image' src='" + itemWork.thumb + "' alt=''/></a></li>")
		})
		contador = contador + 1;
	} 

	$("#showWork").click(function(){
		dibujar(trabajos, contador);
	})

})