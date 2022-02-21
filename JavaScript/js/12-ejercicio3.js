'use strict'
//Hacer un programa que muestre todos los numeros que hay entre dos numeros introducidos

var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

document.write("<h1>De "+numero1+" a "+numero2+" están estos numeros:</h1>")
//el document.write nos permite añadir texto en el body de la página
for(var i = numero1; i <= numero2; i++){
    document.write(i+"</br>");
}