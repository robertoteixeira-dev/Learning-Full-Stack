'use strict'

//Primero cargo el modulo de mongoose
var mongoose = require('mongoose');

var app = require('./app');
var port = 3900;

//Utilizo el connect para conectar a mongodb y pasarle varios parametros
//Pone url, opciones

//Para evitar cientos errores, ponemos algunas promesas en mongodb

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_blog', { useNewUrlParser: true })
    .then(() => {
        //Utilizamos el then para hacer una función de callback que es una función que se ejecuta dentro de otra
        console.log('La conexión a la base de datos se ha realizado bien!');

        //Crear servido y ponerme a escuchar peticiones HTTP
        app.listen(port, () => {
            console.log('Servidor corriendo en http://localhost:'+port);
        });
    });
//Para verificar se salio todo bien, va en el prompt y pone node index.js
//Para volver el prompt pone ctrl + c 






