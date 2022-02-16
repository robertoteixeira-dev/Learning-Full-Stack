'use strict'



//ARRAYS BASICOS

//También se pueden conocer como arreglos o matrices
//Es una colección de datos.
//Una variable puede tener un valor pero con un array se puede tener muchos valores.

var nombre = "Roberto";

//Puedo meter varios valores de varios tipos
var nombres = ["Roberto", "Rangel", 52, true]; 

//Puedo hacer en forma de objeto
var lenguajes = new Array("PHP", "JS", "Java");

/*

//Los arrays tienen indice, cada elemento es un indice 0,1,2,3...
console.log(nombres);
console.log(lenguajes);    
//Para acceder a una posición de mi array, ejemplo el 2
console.log(nombres[2]);

//ARRAYS AVANZADOS


//Para ver la longitud de un array, cuantos elementos tiene un array
console.log(nombres.length);

//Para sacar cual es el elemento através del indice del array 
var elemento = parseInt(prompt("Que  elemento del array quieres?", 0));
alert(nombres[elemento]);


//Si no quiero que se introduzca más indices
if(elemento >= nombres.length){
    alert("Intoduce el numero correcto menor que" + nombres.length);
}else{
    alert("El usuario seleccionado es: "+nombres[elemento]);
}


//Recoger un array completo y mostrar todos sun resultados en pantalla
document.write("<h1>Lenguages de programacion del 2022</h1>");
//Lo mejor ahora es utilizar un bucle
document.write("<ul>");
for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>" +lenguajes[i]+ "</li>");
} //Incluso puedo poner más elementos, ejemplo C#, Python...

*/
document.write("</ul>");

//UNA MEJOR MANERA DE RECORRER UN ARRAY: ForEach

lenguajes.forEach((elemento)=>{
    document.write("<li>"+elemento+"</li>");
});
//Para ver cual es el indice, ejemplo  0 - PHP, 1 - JS
lenguajes.forEach((elemento, indice, arr)=>{
    console.log(arr); //muestra la array original
    document.write("<li>"+indice+" - "+elemento+"</li>");
});



for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

document.write("</ul>");


//Busquedas

var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP";

});

console.log(busqueda);

//Lo puedo reducir 
var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");
//Si quisiera encontrar el indice ponia findIndex
console.log(busqueda);

//Para encontrar si hay valores de un tipo u otro dentro de un array dentro de un array de numeros

var precios = [10, 20, 50, 80, 12];

var busqueda = precios.some(precio => precio == 20);

console.log(busqueda);





