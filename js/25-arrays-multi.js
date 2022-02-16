'use strict'

//Son arrays dentro de otros arrays

var categorias = ['Acción', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

peliculas.sort(); // va a ordenar por orden alfabetico
peliculas.reverse(); // va a dar el orden inverso 

var cine = [categorias, peliculas];


console.log(cine);
//Si yo quiero acceder a una, ejemplo categorias:
//elijo la categoria y el elemento, ejemplo categoria y terror 
console.log(cine[0][1]); 


//Para añadir un elemento al array
var elemento = "";

do{
    elemento = prompt("Introduce tu pelicula:");
    peliculas.push(elemento);
}while(elemento != "Acabar")

//Pero está aparecendo el Acabar y no lo quiero, entonces para eliminar un elemento de un array:
peliculas.pop();

//Si quisiera por en undefined:
peliculas[0] = undefined; //con eso el primer elemento va a aparecer como undefined

//Si quisiera eliminar un elemento concreto de un array:

var indice = peliculas.indexOf('La verdad duele');

if(indice > -1){
    peliculas.splice(indice, 1) //nos permite borrar cuantos indicies queremos, ejemplo 1
}

console.log(indice);

//Para convertir un array a texto
var peliculas_string = peliculas.join();

console.log(peliculas_string);

//Para que aparesca en la consola:
console.log(peliculas);

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ")

console.log(cadena_array);



