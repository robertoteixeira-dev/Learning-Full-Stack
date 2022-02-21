'use strict'

window.addEventListener('load', function () {
    console.log("DOM cargado");

    // 2. Boton de enviar el formulario: eventos submit

    var formulario = document.querySelector("#formulario");

    //4. Crear una caja donde va a aparecer los datos ingresados pelo usuario pero que antes este oculta
    //Después de crearla en HTML,para dejarla oculta:
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none"; //Cuando yo haga submit va a aparecer

    //Capturar el evento submit, es decir, cuando el usuario hace el submit
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log("Evento submit capturado");

    //3. Mostrar datos por pantalla
    //Tendré que acceder al DOM de cada uno de sus campos

        var nombre = document.querySelector("#nombre").value; //La propiedad value saco el valor que tiene adentro
        var apellidos = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;

        box_dashed.style.display = "block";

        var datos_usuario = [nombre, apellidos, edad]; //Pone dentro de un array

        var indice;

        for (indice in datos_usuario) { //Pone dentro de un bucle for in
    //5. Tener un boton que al darle click nos muestra los datos actuales del formulario
    //Después de hacerlo en HTML
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        }

    });

});


