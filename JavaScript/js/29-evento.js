'use strict'
//Los eventos son funciones que se ejecutan cada vez que algo pasa, por ejemplo cuanto el usuario da click a algo, cuando el usuario escribe algo...


//Antes vimos que si pongo el script en head, los elementos de JS que estaban para el body no se aplica. Entonces para solucionar esto utilizando el Evento Load
// Lo que hace es lanzarse cuando todos los elementos y todas las etiquetas entan ya cargadas

window.addEventListener('load', () => {  // Meto todos los elementos dentro 

    //Eventos de Ratón

    //Cuando el usuario hace click 
    // - si podria hacer en HTML - <button id="boton" onclick="alert('Hola me has presionado')">Presioname</button>
    var boton = document.querySelector("#boton");

    //Cambiar el color
    function cambiarColor() {

        console.log("Me has dado click");

        var bg = boton.style.backgroundColor; //Para que no necesites escribir todo y se quede mas lento

        //Este if es para que si va alternando
        if (bg == "green") {
            boton.style.backgroundColor = "red";
        } else {
            boton.style.backgroundColor = "green";
        }
        //Puedo hacer más modificaciones
        boton.style.padding = "10px";

        return true;
    } // Ahora  puedo volver en HTML y utilizar la funcion cambiarColor();

    //HAY UNA FORMA MEJOR DE HACER UN EVENTO CON EL CLICK DEL USUARIO
    //Sin poner onclick en el HTML
    var boton = document.querySelector("#boton");

    // Click
    boton.addEventListener('click', function () {
        cambiarColor();
    });

    //Mouse Over - Para cuando pase por encima de algo cambia el color
    boton.addEventListener('mouseover', function () {
        boton.style.background = "#ccc";
    });

    //Mouseout - Es igual el mouse over pero cambia el elemento cuando salgo de encima 
    boton.addEventListener('mouseout', function () {
        boton.style.background = "black";
    });


    //Primero hay que tener la variable para el input
    var input = document.querySelector("#campo_nombre");
    // Focus - Cuando estamos dentro de algo, como un input de text
    input.addEventListener('focus', function () {
        console.log("[focus] Estas dentro del input");
    });

    // Blur - Es cuando salimos del focus
    input.addEventListener('blur', function () {
        console.log("[blur] Estas fuera del input");
    });

    // Keydown - Es parecido pero sucede cuando está pulsando la tecla
    input.addEventListener('keydown', function (event) {
        console.log("[keydown] Pulsando esta tecla ", String.fromCharCode(event.keyCode));
    }); //Con el String.fromCharCode(event.keyCode) podemos tener cuales teclas el usuario está pulsando

    // Keypress - Me muestra la tecla que fue presionada
    input.addEventListener('keypress', function (event) {
        console.log("[keypress] Tecla presionada ", String.fromCharCode(event.keyCode));
    }); //Con el String.fromCharCode(event.keyCode) podemos tener cuales teclas el usuario está pulsando

    // Keyup - Nos permite capturar el elemento cuando levanto el dedo de la tecla
    input.addEventListener('keyup', function (event) {
        console.log("[keyup] Tecla soltada ", String.fromCharCode(event.keyCode));
    }); //Con el String.fromCharCode(event.keyCode) podemos tener cuales teclas el usuario está pulsando


}); // Final del Load


//Antes vimos que si pongo el script en head, los elementos de JS que estaban para el body no se aplica. Entonces para solucionar esto utilizando el Evento Load
// Lo que hace es lanzarse cuando todos los elementos y todas las etiquetas entan ya cargadas

