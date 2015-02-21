$(function(){
		
		var contador=0;
		$("btnPrueba").click(function(){
			contador++;
			$("txtTexto").text("Ha pulsado"+contador+" veces");
			
		});
		
	});