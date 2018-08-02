'use strict'

window.addEventListener('load', function(){

	console.log("DOM cargado!");

	
		var formulario = document.getElementById("formulario");
		formulario.style.width = "20%";
		formulario.style.borderStyle = "double";
		formulario.textAlign = "center";
		

		console.log(formulario);

		formulario.addEventListener('submit', function(){

			console.log("Submit");

			var nombre = document.querySelector("#nombre").value;
			var apellidos = document.querySelector("#apellidos").value;
			var edad = document.querySelector("#edad").value;

			if(nombre.trim() == null || nombre.trim().length == 0){
				alert("Nombre no válido");
				return false;

			}

			if(apellidos.trim() == null || apellidos.trim().length == 0){
				alert("Apellidos no válido");
				return false;

			}

			if(edad.trim() == null || edad.trim().length == 0 || edad.trim() == isNaN(edad)){
				alert("Edad no válida");
				return false;

			}

			
			console.log(nombre);
			console.log(apellidos);
			console.log(edad);

			var divDatos = document.createElement("div");
			
			
			document.body.appendChild(divDatos);
			

			divDatos.style.marginTop = "50px";
			divDatos.innerHTML = "<h3>Datos del formulario</h3><br><p>Nombre: "+nombre+"</p><br><p>Apellidos: "+apellidos+"</p><br><p>Edad: "+edad+"</p>";
			divDatos.style.width = "15%";
			divDatos.style.float = "right";
			divDatos.style.marginTop = "-16.5%";
			divDatos.style.textAlign = "center";
			divDatos.style.marginRight = "60%";
			divDatos.style.borderStyle = "dashed";


			




		});
	

	

});