'use strict'

//Fetch es un metodo que nos permite hacer peticiones ajax de una manera mucho más simples que como se hacían en JS.
//Peticiones Ajax es una llamada a un servicio rest, un API REST

//JSONplaceholder es un API RESTFUL fake, es decir, con datos de prueba

//Un API REST es un servicio backend que nos devuelve datos en JSON 

//En el site jsonplaceholders - vamos a utilizar el users
//Tambien hay la reqres 

//Hay una extension llamada jsonview 

//Vamos hacer un listado de usuario:
//Fetch (ajax) y peticiones a servicios/API RESTFUL

var div_usuarios = document.querySelector("#usuarios");

getUsuarios()
    .then(data => data.json()) //Metodo then que es onde recogemos datos
    .then(data => {
        usuarios = data;
        listadoUsuarios(data);

        return getInfo();
    })
    .then(data => {
        console.log(data);
    })

    //Capturar error en las promesas
    .catch(error => {
        console.log(error);
    });


function getUsuarios() {
    return fetch('http://localhost:3000/users', { mode: 'cors' }) //Esto es una promesa
}

//CREANDO UNA PROMESA DESDE CERO 
function getInfo() {
    var profesor = {
        nombre: 'Victor',
        apellidos: 'Robles',
        url: 'https://victorroblesweb.es'
    };

    return new Promise((resolve, reject) => { //El new es para crear un objeto/clase
        var profesor_string = "";

        setTimeout(function () {
            var profesor_string = JSON.stringify(profesor);

            if (typeof profesor_string != 'string' || profesor_string == '') return reject('error');

            return resolve(profesor_string);

        }, 3000);

    });
}

function listadoUsuarios(usuarios) {
    //Para aparecer en la página
    usuarios.map((user, i) => {
        let nombre = document.createElement('h2');

        nombre.innerHTML = JSON.stringify(user);

        div_usuarios.appendChild(nombre);
    });
}

//Las promesas son mucho utiles para evitar el callbagel, es decir, tener un callback dentro de otro callback y otro...
//Tenemos varias peticiones ajax que tenemos que esperar la respuesta de una para hacer otra





