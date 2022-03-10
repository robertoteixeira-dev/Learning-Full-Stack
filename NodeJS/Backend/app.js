'use strict'

// Cargar modulos de node para crear el servidor
var express = require('express');
var bodyParser = require('body-parser');

// Ejecutar express para trabajar con HTTP
var app = express();

// Cargar ficheros rutas

// Cargar Middlewares que es algo que se ejecuta antes de cargar una ruta o una aplicación
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); //Convertir en Json

// Cargar el CORS para permitir peticiones desde el Front-End

// Añadir prefijos a rutas

// Añdir una ruta o metodo de prueba para el API 
app.get('/probando', () => {
    
})

// Exportar modulo (que es el fichero actual) para poder utilizarlo fuera
module.exports  = app;


