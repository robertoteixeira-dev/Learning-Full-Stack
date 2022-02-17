'use strict'

// DOM - Document Object Model

//El script tiene que estar al final del body para que funcione

//Puedo crear una funcion generica y pedir al usuario que elija el color que quiere
function cambiaColor(color) {
    caja.style.background = color;
}//Ahora en la consola puedo invocar la funcion cambiaColor("green"); y cambiar el color

//Si tengo una caja con un id, ejemplo box, puedo seleccionarlo para manipularlo
var caja = document.getElementById("box");

//Otra forma de seleccionar un elemento
var caja = document.querySelector("#box");

//Para mostrar el codigo de HTML que tiene dentro de box, pone .innerHTML
caja.innerHTML = "TEXTO EN LA CAJA DESDE JS"; //Para modificar el texto que tiene dentro de la caja

//Puedo cambiar el estilo
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";

//También puedo añadir cualquier atributo HTML, ejemplo un class
caja.class = "hola";
caja.className = "hola2"; // cambiar el nombre de la clase

//Para mostrar en la consola
console.log(caja);



//Para encontrar todos los div que tengo en HTML:

//Para conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');// Me muestra un array con todos los divs


//Para acceder a uno de los divs:
var contenidoEnTexto = todosLosDivs[2].textContent; //Con el . puedo utilizar cualquier propriedad, por ejemplo, para sacar el contenido que tiene el div utilizo el textContent; dentro de una var 
console.log(contenidoEnTexto);
//También podría utilizar el innerHTML pero este me permite también asignar un valor nuevo a este contenido
var contenidoEnTexto = todosLosDivs[2];
contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento";


//Puedo recorrer todos los divs que hay y puedo crear una lista y meter dentro del body

var seccion = document.querySelector("#miseccion");

var hr = document.createElement("hr");

var valor;
for (valor in todosLosDivs) {

    if (typeof todosLosDivs[valor].textContent) {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}

seccion.append(hr); // para añadir un espacio abajo

//Para mostrar en la consola
console.log(todosLosDivs);


// Para conseguir elementos por su class 
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');

console.log(divsAmarillos);
//Puedo modificar-lo
divsAmarillos[0].style.background = "yellow";

//Para modificar los rojos si quiero 
var div
for (div in divsRojos) {
    if (divsRojos[div].className == "rojo") {
        divsRojos[div].style.background = "red";
    }
}


// conseguir elementos con un ID concreto
//Query selector
var id = document.querySelector("#encabezado");
console.log(id);

//Haciendo con una class
var claseRojo = document.querySelectorAll(".rojo");//Solo me saca uno
console.log(claseRojo);

//Si hago lo mismo con todas las etiquetas div
var etiqueta = document.querySelector("div");//Solo me saca uno
console.log(etiqueta);
//El Query Selector no es recomendable  para seleccionar todos sino que uno en especifico porque solo me saca uno. Pero existe el querySelectorAll para seleccionar todos

