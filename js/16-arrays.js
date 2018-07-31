'use strict'

// Arrays

var nombre = "Eric Perez";
var nombres = ["Eric Perez","Rodolfo dominguez", "Alba Tellez", "Eustaquio Lopez"]

var lenguajes = new Array("PHP", "JS", "Java", "C", "Pascal");

console.log(lenguajes[2]);
/*
var elemento = parseInt(prompt("Que elemento del array quieres?", 0));


if(elemento >= nombres.length){
	alert("Introduce el numero correcto menor que "+nombres.length);
}else{
	alert("El usuario seleccionado es: "+nombres[elemento]);
}
*/


/*
for(var i = 0;i < lenguajes.length; i++){
	document.write("<h1>Lenguajes de programacion del 2018</h1><br>");
	document.write("<ul>");
	document.write("<li>"+lenguajes[i]+"</li>");
	document.write("</ul>");
}*/

lenguajes.forEach((elemento, index, data) =>{

	document.write("<h1>Lenguajes de programacion del 2018</h1><br>");
	document.write("<ul>");
	document.write("<li>"+index+" - "+elemento+"</li>");
	document.write("</ul>");


});