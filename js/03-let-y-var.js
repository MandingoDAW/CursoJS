'use strict'

// Pruebas con let y var

// Prueba con var
var numero = 40;
console.log(numero); // valor 40

if(true){
	var numero = 50;
	console.log(numero);  // valor 50
}

console.log(numero); // valor 50


// Prueba con let

var texto = "Curso JS victorroblesweb.es";
console.log(texto);

if(true){
	let texto = "Curso Laravel 5 victorroblesweb";
	console.log(texto); // valor laravel 5
} 

console.log(texto); //valor Curso JS

//La variable Let se ejecuta en un bloque de codigo concreto
//La variable var se actualiza en todo el codigo