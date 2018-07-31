'use strict'

/*
Mostrar numero impares  entre dos valores que introduzcamos
*/

var numero_inicial = parseInt(prompt("Introduce numero inicial: ", 0));
var numero_final = parseInt(prompt("Introduce numero final: ", 0));

 for(var contador = numero_inicial;contador < numero_final; contador++ ){

 	if(contador % 2 == 0){

 	}else{
 		console.log(contador+" es impar");
 	}

 }