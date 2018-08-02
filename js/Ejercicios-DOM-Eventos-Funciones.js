'use strict'

window.addEventListener('load', function(){

	console.log("DOM cargado!");

	
		var formulario = document.getElementById("formulario");
		

		console.log(formulario);

		formulario.addEventListener('submit', function(){

			console.log("Submit");

			var nombre = document.querySelector("#nombre").value;
			var apellidos = document.querySelector("#apellidos").value;
			var edad = document.querySelector("#edad").value;
			
			console.log(nombre);
			console.log(apellidos);
			console.log(edad);

			var divDatos = document.createElement("div");
			
			
			document.body.appendChild(divDatos);
			divDatos.style.borderStyle = "dashed";
			//

			divDatos.style.marginTop = "50px";
			divDatos.appendChild(datosForm);



		});
	

	

});