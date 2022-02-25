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
var usuarios = [];
fetch('http://localhost:3000/users', {mode: 'cors'}) //Esto es una promesa
.then(data => data.json()) //Metodo then que es onde recogemos datos
.then(data => {
    usuarios = data;
    console.log(usuarios);
    //Para aparecer en la página
    usuarios.map((user, i) => {
        let nombre = document.createElement('h2');

        nombre.innerHTML = JSON.stringify(user);

        div_usuarios.appendChild(nombre);
    });
});




