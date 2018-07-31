'use strict'

// DOM -Document Object Model

function cambiaColor(color){
	caja.style.background = color;
}


// Conseguir elementos con ID concreto


//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");


caja.innerHTML = "Texto en la caja desde JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola";

// Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');
var contenidoEnTexto = todosLosDivs[2];

contenidoEnTexto.innerHTML = "Otro texto";



var valor;

	for(valor in todosLosDivs){
	var parrafo = document.createElement("p");
	var texto = document.createTextNode(todosLosDivs[valor].textContent);

	parrafo.appendChild(texto);
	document.querySelector("#miseccion").appendChild(parrafo);

}





console.log(todosLosDivs);



// Conseguir elementos por su clase css

console.log(caja);

