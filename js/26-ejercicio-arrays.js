'use strict'

//Hacer un programa que:
// 1. Pida 6 numeros por pantalla y los meta en un array
// 2. Mostrar el array entero (todos sus elementos) en el cuerpo de la página y la consola
// 3. Ordenarlos y mostrarlo 
// 4. Invertir su orden y mostrarlo
// 5. Mostrar cuantos elementos tiene el array 
// 6. Hacer una busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice (posición)


//PARTE 1 Y 2

//Para utilizar después, por ejemplo cuanto voy a mostrar en el cuerpo de la página
function mostrarArray(elementos, textoCustom = "") { //El textocustom es para pasarle un dato si me interesa 
    document.write("<h1>Contenido del array " + textoCustom + "</h1>")
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>" + elemento + "</li>")
    });
    document.write("</ul>");
}

//para definir el objeto del array y cuantas posiciones va a tener
var numeros = new Array(6);
// tiene tres partes: el contador, la condición que sea menor que 5 porque empezamos a contar desde 0
for (var i = 0; i <= 5; i++) {
    numeros[i] = parseInt(prompt("Introduce un numero", 0));
}

/*
//Si podría hacer de otra manera:
var numeros = []; 
// tiene tres partes: el contador, la condición que sea menor que 5 porque empezamos a contar desde 0
for(var i = 0; i <= 5; i++){
    numeros.push(parseInt(prompt("Introduce un numero", 0)));
}
*/

//Para mostrar el array en la consola
console.log(numeros);

//Mostrar en el cuerpo de la página
mostrarArray(numeros);

//PARTE 3 - Ordenar y mostrar
numeros.sort(function (a, b) { return a - b });
mostrarArray(numeros, 'ordenado');
//Si quiero que este ordenada de manera numerica, tengo que añadir en sort(function(a, b){return a-b});

//PARTE 4 - Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, 'revertido');


//PARTE 5 - Contar cuentos elementos hay
document.write("<h1>El array tiene: " + numeros.length + " elementos");

//PARTE 6 - Hacer una busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice (posición)

//Busqueda
var busqueda = parseInt(prompt("Busca un numero", 0));

var posicion = numeros.findIndex( numero => numero == busqueda);

if (posicion && posicion != -1) {
    document.write("<h1>ENCONTRADO</h1>");
    document.write("<h1>Posición de la busqueda: " + posicion + "</h1>");
}else{
    document.write("<h1>NO ENCONTRADO</h1>");
}


