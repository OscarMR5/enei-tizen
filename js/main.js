
var contador=0;

$(window).load(function(){
	
	   
	    $("#content").load("js/views/hola.html",btnPrueba);
	
		
		
		
	});

function btnPrueba(){
	$("#btnPrueba").on("click",function(){
		
		contador++;
		$("#txtTexto").text("Ha pulsado"+contador+" veces");
		
	});
}