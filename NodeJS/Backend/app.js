'use strict'

// Cargar modulos de node para crear el servidor
var express = require('express');
var bodyParser = require('body-parser');

// Ejecutar express para trabajar con HTTP
var app = express();

// Cargar ficheros rutas

// Cargar Middlewares que es algo que se ejecuta antes de cargar una ruta o una aplicación
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //Convertir en Json

// Cargar el CORS para permitir peticiones desde el Front-End

// Añadir prefijos a rutas

// Añdir una ruta o metodo de prueba para el API 

/*

app.get('/probando', function (req, res) {
    //Yo podría hacer con la => al inves de poner function (req, res) =>
    console.log("Hello World");

    //busca por http codes para elegir uno
    
    
    return res.status(200).send(`
        <ul>
            <li>NodeJS</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
        </ul>
    `);
    

    //Pero lo mejor seria devulver un JSON
    
    //Enviando dados desde postman
    var hola = req.body.hola;

    return res.status(200).send({
        curso: 'NodeJS',
        autor: 'Victor Robles WEB',
        url: 'victorroblesweb.es',
        hola
    }); 
    //Para que salga ordenado tiene que poner un plugin llamado json.view
}); 
*/


// Exportar modulo (que es el fichero actual) para poder utilizarlo fuera
module.exports = app;


// Para testar el API utilizamos el POSTMAN que es un cliente rest
//GET - localhost:3900 url de su págona
//También puego enviar dados desde el post man creando una variable y poniendo el dado en el Body del postman

//La arquitectura que vamos a utilizar para desarrollar el API es el Modelo Vista Controlador MVC, es decir, que todo el proyecto va a estar separado en modelos que seran las capas de abstración sobre la cual vamos a estar conectando a la base de datos y nos va a devolver dados, luego los controladores que va a ser la parte que mediante la ruta vamos a recibir datos, procesarlos e vdevolver un dato al cliente y las vistas que seran los JSON 




