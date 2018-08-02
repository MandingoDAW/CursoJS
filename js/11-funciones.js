'use strict'

// Funciones 
// Una funcion es una agrupacion reutilizable de un conjunto de instrucciones

function porConsola(numero1, numero2){
	console.log("Resta: "+(numero1-numero2));
	console.log("Multiplicacion: "+(numero1*numero2));
	console.log("Division: "+(numero1/numero2));
}

function porPantalla(numero1, numero2){
	console.log("Resta: "+(numero1-numero2));
	console.log("Multiplicacion: "+(numero1*numero2));
	console.log("Division: "+(numero1/numero2));
	
}

// Defino la funcion y parametros
function calculadora(numero1, numero2, mostrar = false){

	// codigo a ejecutar
	if(mostrar == false){
		porConsola(numero1,numero2);

	}else{
		porPantalla(numero1,numero2);
	}

return true;

}

// Invocar o llamar a la funcion
calculadora(3,4);
calculadora(4,7,true);

/*
for(var i = 1; i <= 10; i++){
	console.log(i);
	calculadora(i,8);
}
*/