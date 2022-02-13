'use strict'

//Mostrar todos los números impares que hay entre dos numeros introducidos por el usuario

var numero1 = parseInt(prompt("Introduce el primer numero",0));
var numero2 = parseInt(prompt("Introduce el segundo numero",0));

while(numero1 < numero2){
    numero1++;
    //un operador de encremendo (++;) para que se vaya reduciendo hasta que sean iguales 
    if(numero1%2 != 0){
        console.log("El " +numero1+ " es impar");
    }
}


