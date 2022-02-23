'use strict'


//El localstorage es una manera de almacenar información dentro del navegador y que persista y este disponible mientras voy navegando en la página, es como uma memoria. 

//Como comprobar si el navegador es compatible:
if(typeof(storage) !== 'underfined'){
    console.log("Localstorage disponible");
}else{
    console.log("Incompatible con Localstorage");
}

// En la consola - application - clear storage - Local Storage: puedo trabajar con el localstorage ou em Storage 
//En cada página web tenemos un localstorage diferente

//Como guardar datos 
localStorage.setItem("titulo", "Curso de JS");

//Como recuperar elementos
localStorage.getItem("titulo");
console.log(localStorage.getItem("titulo")); //Puedo poner un console log para mostrar en la consola 
document.querySelector("#peliculas").innerHTML= localStorage.getItem("titulo"); //Puedo poner un document.querySelector para mostrar en la página

//Como guardar objetos
var usuario = {
    nombre: "Roberto",
    email: "roberto.com",
    web: "robertoweb.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario)); //Es necesario convertirlos a un string

//Como recuperar objeto del storage
console.log(localStorage.getItem("usuario")); //Si lo hago de esta manera aparece apenas como string porque es un string, entonces tengo que convertirlo a un objeto

var userjs = JSON.parse(localStorage.getItem("usuario")); //Con eso convierto de string a un objeto de JS

console.log(userjs); //Para mostrar en la consola
document.querySelector("#datos").append(+userjs.web+ " - "+userjs.nombre); //Para mostrar en la página

//Para remover algo
localStorage.removeItem("usuario");




