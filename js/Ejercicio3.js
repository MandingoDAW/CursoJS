'use strict'

/*
Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/

var numero_inicial = parseInt(prompt("Introduce numero inicial: ", 0));
var numero_final = parseInt(prompt("Introduce numero final: ", 0));
var contador = numero_inicial;


do{
	

	if(isNaN(numero_inicial)){
		numero_inicial = 0;
	}else if(isNaN(numero_final)){
		numero_final = 0;

	}else{

		contador++;
		alert(contador);
		

	}

}while(contador != numero_final-1)