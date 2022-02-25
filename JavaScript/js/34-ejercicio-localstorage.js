'use strict'

//Para guardar en el localstore las informaciones que el usuario pone en el formulario
var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener('submit', function () { //Para coger el evento submit

    var titulo = document.querySelector('#addpelicula').value;

    //Para que no añada nada si el usuario no pone nada
    if (titulo.length >= 1) {
        localStorage.setItem(titulo, titulo);
    }
});

//Para recoger y mostrar todos los elementos añadidos en una lista:
var ul = document.querySelector('#peliculaslist');

for (var i in localStorage) {

    console.log(localStorage[i]);

    if (typeof localStorage[i] == 'string') { //Para hacer caso el localstore sea un string, un texto
        var li = document.createElement("li"); //Creando un li para hacer una lista con los elementos añadidos
        li.append(localStorage[i]); //Añadiendo un valor a li 
        ul.append(li);
    }

}

//Para hacer un boton que el usuario pueda borrar las informaciones que puso:
var formulario = document.querySelector("#formBorrarPeliculas");

formulario.addEventListener('submit', function () { //Para coger el evento submit

    var titulo = document.querySelector('#borrarPelicula').value;

    //Para que no añada nada si el usuario no pone nada
    if (titulo.length >= 1) {
        localStorage.removeItem(titulo);
    }
});


