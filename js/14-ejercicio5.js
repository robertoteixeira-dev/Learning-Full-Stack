'use strict'

//Muestre todos los numeros divisores de un numero introducidos en prompt

var numero = parseInt(prompt("Mete un numero",1));

//el for esta formardo por tres partes, la  primera es el inicializador, la segunda es la condición y la tercera es el contador

for(var i = 1; i <= numero; i++){

    if(numero%i == 0){
        console.log("Divisor: "+ i);
    }
}




