'use strict'



function porConsola(numero1, numero2) {
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicacion: " + (numero1 * numero2));
    console.log("División: " + (numero1 / numero2));
    console.log("******************");
}

function porPantalla(numero1, numero2) {
    document.write("Suma: " + (numero1 + numero2) + "<br/>");
    document.write("Resta: " + (numero1 - numero2) + "<br/>");
    document.write("Multiplicacion: " + (numero1 * numero2) + "<br/>");
    document.write("División: " + (numero1 / numero2) + "<br/>");
    document.write("******************" + "<br/>");
}

function calculadora(numero1, numero2, mostrar = false) {

    //Conjunto de instrucciones a ejecutar
    if (mostrar == false) {
        porConsola(numero1, numero2);
    } else {
        porPantalla(numero1, numero2);
    }
    return true;
}
//Invocar o llamar la función
calculadora(12, 8);
calculadora(2, 5, true);
calculadora(3, 6, true);
