'use strict'

//Para entender mucho mejor las funciones anonimas vamos a ver que es un callbacks, que es una función dentro de otra función

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumame(5,7, dato => {
    console.log("La suma es: ", dato);
},
dato => {
    console.log("La suma por dos es: ", (dato*2));
});