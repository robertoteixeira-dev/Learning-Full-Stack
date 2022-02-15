'use strict'

//hacer una búsqueda dentro de un string

var numero = 444;
var texto1 = "Bienvenido al curso de JS";
var texto2 = "Es muy buen curso";


var busqueda = texto1.trim();
console.log(busqueda);

/*
//cambia la palabra por otra palabra
var busqueda = texto1.replace("curso", "training");
console.log(busqueda);

//Para separar un string y da el resto como resultado
var busqueda = texto1.slice(14);
console.log(busqueda);
//Incluse se podría decidir hasta donde se corta (14, 22);

//Para recortar las palabras y meterla en un array y hacer una colección
var busqueda = texto1.split();
console.log(busqueda);
//Si pongo " " va a separar cada palabra 

//Para sacar los espacios por delante y pordetras 
var busqueda = texto1.trim();
console.log(busqueda);
//sin el trim va a tener un espacio en la frase






var busqueda = texto1.indexOf("curso");
console.log(busqueda);
//dice que en el caracter 14 empieza la palabra curso

//permite sacar la ultima vez que aparece
var busqueda = texto1.lastIndexOf("curso"); 
console.log(busqueda);

//es lo mismo
var busqueda = texto1.search("curso"); 
console.log(busqueda);

//También podemos utilizar una match que va a devolver un array con las  palabras 
var busqueda = texto1.match("curso"); //es lo mismo
console.log(busqueda);
//Es util para buscar un grupo de palabras, ver la coincidencia

//encuentra la palabra que empieze en 14 y va 5 letras por delante
var busqueda = texto1.substr(14,5);
console.log(busqueda);

//sirve para sacar una letra en concreto y puedo indicar en que posición y en que indece está
var busqueda = texto1.charAt(14);
console.log(busqueda);

//Para buscar un texto en especifico al inicio del string
var busqueda = texto1.startsWith("Bienvenido");
console.log(busqueda);

//Para buscar una palabra
var busqueda = texto1.includes("JS");
console.log(busqueda);
*/