let nombre = document.getElementById('nombre'); 
nombre.addEventListener("keyup", function(){
	if(nombre.value == ""){
  		document.getElementById("verificacion_nombre").style.visibility = 'hidden';
	}
	else {
		document.getElementById("verificacion_nombre").style.visibility = 'visible';
	}
});

let apellido = document.getElementById('apellido'); 
apellido.addEventListener("keyup", function(){
	if(apellido.value == ""){
  		document.getElementById("verificacion_apellido").style.visibility = 'hidden';
	}
	else {
		document.getElementById("verificacion_apellido").style.visibility = 'visible';
	}
});

let direccion = document.getElementById('direccion'); 
direccion.addEventListener("keyup", function(){
	if(direccion.value == ""){
  		document.getElementById("verificacion_direccion").style.visibility = 'hidden';
	}
	else {
		document.getElementById("verificacion_direccion").style.visibility = 'visible';
	}
});

let edad = document.getElementById('edad'); 
edad.addEventListener("keyup", function(){
	if(edad.value == ""){
  		document.getElementById("verificacion_edad").style.visibility = 'hidden';
	}
	else {
		document.getElementById("verificacion_edad").style.visibility = 'visible';
	}
});

let profesion = document.getElementById('profesion'); 
profesion.addEventListener("keyup", function(){
	if(profesion.value == ""){
  		document.getElementById("verificacion_profesion").style.visibility = 'hidden';
	}
	else {
		document.getElementById("verificacion_profesion").style.visibility = 'visible';
	}
});

//Falta corroborar que el input tenga @ y el .com
let correo = document.getElementById('correo'); 
correo.addEventListener("keyup", function(){
	if(correo.value == ""){
  		document.getElementById("verificacion_correo").style.visibility = 'hidden';
	}
	else {
		document.getElementById("verificacion_correo").style.visibility = 'visible';
	}
});

let hobby = document.getElementById('hobby'); 
hobby.addEventListener("keyup", function(){
	if(hobby.value == ""){
  		document.getElementById("verificacion_hobby").style.visibility = 'hidden';
	}
	else {
		document.getElementById("verificacion_hobby").style.visibility = 'visible';
	}
});



let finalCliente = document.getElementById('finalCliente'); 
finalCliente.addEventListener("keyup", function(){
	if(finalCliente.value == ""){
  		document.getElementById("verificacion_finalCliente").style.visibility = 'hidden';
	}
	else {
		document.getElementById("verificacion_finalCliente").style.visibility = 'visible';
	}
});