'use strict'

/*
1.Pida 6 numeros por pantalla y los meta en un array
2.Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3.Ordenarlo y mostrarlo
4.Invertir su orden y mostrarlo
5.Mostrar cuantos elementos tiene el array
6.Busqueda de un valor introducido por el usuario, que nos diga su posicion
(se valorará el uso de funciones)
*/

var arrayNumeros = new Array();
//console.log(arrayNumeros);



function obtenerNumeros(numero, topeDigitos){

topeDigitos = 6;

	for(var i = 1; i <= topeDigitos; i++){
		numero = prompt("Por favor introduce el digito número "+i);
		arrayNumeros.push(numero);
	}

	console.log(arrayNumeros);

}

function mostrarArray(){

	obtenerNumeros();

	document.write("<h3>Numeros seleccionados</h3><br><br>");
	document.write("<p>Digitos introducidos: "+arrayNumeros+"</p>");

	ordenarNumeros();

}

function ordenarMenoraMayor(a, b){ 
  return a - b; 
};

function ordenarMayoraMenor(a, b){ 
  return a + b; 
};

function ordenarNumeros(menoramayor, mayoramenor){

	menoramayor = arrayNumeros.sort(ordenarMenoraMayor);
	console.log(menoramayor);
	document.write("<p>Numeros ordenados de menor a mayor: "+ menoramayor);
	mayoramenor = arrayNumeros.sort(ordenarMayoraMenor);
	console.log(mayoramenor);
	document.write("<p>Numeros ordenados de mayor a menor: "+ mayoramenor);

}

function contarElementos(elementos){

	elementos = arrayNumeros.length;
	console.log(elementos);
	document.write("<p>Cantidad de elementos: "+ elementos);

}

function busquedaPosicion(indice){

	indice = prompt("Dime que posición del array quieres ver: ");
	document.write("<p>El numero de la posición del array indicado: " + arrayNumeros[indice] + "</p>");
	
}



function EjercicioArray(){
	mostrarArray();
	contarElementos();
	busquedaPosicion();


}

EjercicioArray();