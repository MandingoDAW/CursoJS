'use strict'

// Funciones anonimas y callbacks
// Es una funcion que no tiene nombre

/*
var pelicula = function(nombre){
	return "La peliculas es: "+nombre;

}

*/

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
	var resultado = numero1 + numero2;

	sumaYmuestra(resultado);
	sumaPorDos(resultado);

	return resultado;

}

sumame(5,7,function(dato){
			console.log("La suma es:", dato);

},
function(dato){
	console.log("La suma por dos es:", (dato*2));
});