'use strict'


window.addEventListener('load', function () {
    // Funciones de tiempo 
    //Timers

    function intervalo() {
        //SetInterval - Nos permite ejecutar una funcion de callback o un trozo de codigo a cada xsegundos
        var tiempo = setInterval(function () {
            console.log("Set interval ejecutado");

            //También lo podría utilizar  para que cambie colores y tamaños, etc
            var encabezado = document.querySelector("h1");
            if (encabezado.style.fontSize == "50px") { //Puedo utilizar el if para que se quede cambiando
                encabezado.style.fontSize = "20px";
            } else {
                encabezado.style.fontSize = "50px";
            }

        }, 3000); //Esto es 3 segundos

        //SetTimeout - Se ejecuta solamente una vez
        var tiempo = setTimeout(function () {
            console.log("Set interval ejecutado");

            //También lo podría utilizar  para que cambie colores y tamaños, etc
            var encabezado = document.querySelector("h1");
            if (encabezado.style.fontSize == "50px") { //Puedo utilizar el if para que se quede cambiando
                encabezado.style.fontSize = "20px";
            } else {
                encabezado.style.fontSize = "50px";
            }

        }, 5000); //Esto es 3 segundos

        return tiempo;
    }

    var tiempo = intervalo();

    //STOP - Para hacer con que se pare al clickar en stop
    //Primero crea el boton stop en HTML
    var stop = document.querySelector("#stop");

    stop.addEventListener("click", function(){
        alert("Has parado el intervalo en bucle");
        clearInterval(tiempo); //Va a hacer con que pare
    });

    //START - Para hacer con que se inicie
    //Primero crea el boton start en HTML
    var start = document.querySelector("#start");
    start.addEventListener("click", function(){
        alert("Has iniciado el intervalo en bucle");
        intervalo();
    });

});



