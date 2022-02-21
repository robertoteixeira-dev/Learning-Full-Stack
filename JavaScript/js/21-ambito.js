'use strict'

function holaMundo(texto){
    var hola_mundo = "Texto dentro de functión";

    console.log(texto);
    console.log(typeof numero.toString());
    console.log(hola_mundo);
}

var numero = 12;
var texto = "Hola mundo soy una variable global"
holaMundo(texto);

 //Yo puedo acceder una variable de fuera dentro de la funcion, pero no puedo acceder fuera a una variable dentro de la function
 //Para transformar cualquier cosa en un string: pone .toString()
 console.log(numero.toString());
 //Puedo usar el typeof para comprobar
 console.log(typeof numero.toString());