'use strict'
//utilizando un bucle, mostrar la media y la suma de los número introducidos pelo usuario hasta que nos da un numero negativo y ahí muestro el resultado

var suma =0;
var contador = 0;

do{
    var numero = parseInt(prompt('Introduce numeros hasta que metas uno negativo',0));

    if(isNaN(numero)){
        numero = 0;
    }else if(numero >=0){
        suma = suma + numero;
        //seria lo mismo poner suma += numero;
        contador++; 
        // poner un contador++ para sumarle 1 al contador, ver la interacion que esta tendo y puder sacar la media
    }

    console.log(suma);
    console.log(contador);
}while(numero >= 0)

alert("La suma de todos los numero es: " +suma);
alert("La media de todos los números es: "+(suma/contador));





