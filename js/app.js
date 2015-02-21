( function () {
	window.addEventListener('load', function(e){
		var texto=document.getElementById('txtTexto');
		var button=document.getElementById('btnPrueba');
		var contador=0;
		button.onclick=function(){
			contador++;
			texto.innerHTML="Ha pulsado "+contador+" veces";
		}
	});
	
	window.addEventListener( 'tizenhwkey', function( ev ) {
		if( ev.keyName == "back" ) {
			var page = document.getElementsByClassName( 'ui-page-active' )[0],
				pageid = page ? page.id : "";
			if( pageid === "main" ) {
				try {
					tizen.application.getCurrentApplication().exit();
				} catch (ignore) {
				}
			} else {
				window.history.back();
			}
		}
	} );
} () );
