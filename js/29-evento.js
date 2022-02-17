'use strict'
//Los eventos son funciones que se ejecutan cada vez que algo pasa, por ejemplo cuanto el usuario da click a algo, cuando el usuario escribe algo...

//Eventos de Ratón

//Cuando el usuario hace click 
// - si podria hacer en HTML - <button id="boton" onclick="alert('Hola me has presionado')">Presioname</button>
var boton = document.querySelector("#boton");

//Cambiar el color
function cambiarColor(){

    console.log("Me has dado click");

    var bg = boton.style.backgroundColor; //Para que no necesites escribir todo y se quede mas lento

    //Este if es para que si va alternando
    if(bg == "green"){ 
        boton.style.backgroundColor = "red";
    }else{
        boton.style.backgroundColor = "green";
    }
    //Puedo hacer más modificaciones
    boton.style.padding = "10px";
    
    return true;
} // Ahora  puedo volver en HTML y utilizar la funcion cambiarColor();

//HAY UNA FORMA MEJOR DE HACER UN EVENTO CON EL CLICK DEL USUARIO
//Sin poner onclick en el HTML
var boton = document.querySelector("#boton");

boton.addEventListener('click', cambiarColor());
