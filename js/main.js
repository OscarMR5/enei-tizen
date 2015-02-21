$(window).load(function(){
	
		var contador=0;
		$("#btnPrueba").on("click",function(){
			
			contador++;
			$("#txtTexto").text("Ha pulsado"+contador+" veces");
			
		});
		
	});