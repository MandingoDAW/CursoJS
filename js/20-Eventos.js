'use strict'

// Eventos

// Eventos Ratón



function cambiarColor(){

	console.log("Me has dado click");
	var bg = boton.style.background;

	if(bg == "green"){
		boton.style.background = "red";
	}else{
		boton.style.background = "green";
	}

	return true;
}

var boton = document.querySelector("#boton");


// Evento click
boton.addEventListener('click', function(){
		cambiarColor();
});


// mouseover
boton.addEventListener('mouseover', function(){
		boton.style.background = "white";
});