'use strict'

/*
Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
PLUS: Si los numeros no son un numero o son menores a 0 nos vuelva a pedir los datos
*/

var numero_1 = parseInt(prompt("Dime el primer número: ", 0));
var numero_2 = parseInt(prompt("Dime el segundo número: ", 0));

while(numero_1 <= 0 || numero_2 <= 0 || isNaN(numero_1) || isNaN(numero_2)){
	numero_1 = parseInt(prompt("Dime el primer número: ", 0));
	numero_2 = parseInt(prompt("Dime el segundo número: ", 0));
}


if(numero_1 == numero_2){
	alert("Lo dos números son iguales");
}else if(numero_1 > numero_2){
	alert(numero_1+" es el mayor");
	alert(numero_2+" es el menor");

}else if(numero_2 > numero_1){
	alert(numero_2+" es el mayor");
	alert(numero_1+" es el menor");
}else{
	alert("introduce numeros correctos");
}

