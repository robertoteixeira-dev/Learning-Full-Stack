'use strict'

// JSON es JavaScript Object Notation y nos permite crear objetos, son arrays asociativos 

//Esto es un objeto JSON, una variable con varias propriedades adentro
var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: 'Estados Unidos'
};

//Para acceder en la consola pone el nombre. una propriedade, ejemplo pelicula.titulo

//Si yo quisiera cambiar alguna propriedade:

pelicula.titulo = "Superman"

//Puedo crear un array y luego meter mi objeto adentro. Asi como puedo poner objeto dentro de objeto
var peliculas = [
    {titulo: "La verdad duele", year: 2016, pais: "Fracia"},
    pelicula
];

var caja_peliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);
    caja_peliculas.append(p);
}

console.log(pelicula);





