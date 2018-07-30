'use strict'

// Bucle WHILE

var year = 2018;

while(year <= 2051){
	// ejecuta esto
	console.log("estamos en el año: "+year);

	if(year == 2000){
		break; //paramos el bucle
	}

	year++;
}


// Do While
var years = 30;

do{
	alert("SOLO CUANDO SEA DIFERENTE A 20");
	years--;

}while(years > 25)