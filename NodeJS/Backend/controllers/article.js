//Acá vamosa tener los diferentes metodos y rutas relacionadas con artículos de nuestra API

'use strict'

var validator = require('validator');
var Article = require('../models/article');


var controller = {

    datosCurso: (req, res) => {

        var hola = req.body.hola;

        return res.status(200).send({
            curso: 'NodeJS',
            autor: 'Victor Robles WEB',
            url: 'victorroblesweb.es',
            hola
        });

    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'Soy la acción test de mi controlador de articulos'
        });

    },
    //Vamos utilizar el metodo save que nos permite crear un nuevo articulo
    save: (req, res) => {

        // Recoger parametros por post
        var params = req.body;

        // Validar datos (validator)
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);

        } catch (err) {
            return res.status(200).send({
                status: 'error',
                messege: 'Faltan datos por enviar !!!'
            });
        }

        if (validate_title && validate_content) {
            // Crear el objeto a guardar 
            var article = new Article();

            // Asignar valores
            article.title = params.title;
            article.content = params.content;
            article.image = null;

            // Guardar el articulo
            article.save((err, articleStored) => {

                if (err || !articleStored) {
                    return res.status(200).send({
                        status: 'error',
                        messege: 'El articulo no se ha guardado !!!'
                    });
                }

                // Devolver una respuesta
                return res.status(200).send({
                    status: 'success',
                    messege: 'Soy la acción SAVE de mi controlador de articulos',
                    article: articleStored
                });

            });

            /*
            // Devolver una respuesta
            return res.status(200).send({
                status: 'success',
                messege: 'Soy la acción SAVE de mi controlador de articulos',
                article
            });
            */
        } else {
            return res.status(200).send({
                status: 'error',
                messege: 'Los datos no son validos !!!'
            });
        }

    },

    // Metodo para sacar todos los articulos

    getArticles: (req, res) => {

        var query = Article.find({})

        var last = req.params.last;
        if(last || last != undefined){
            query.limit(5);
        }

        //Hay que crear la ruta en el routes - article.js 
        // .sort('-_id') - Es utilizado para que se ordene del más nuevo 

        // Find - Podría poner cualquier condicion, pero ahora quiero sacar todos
        query.sort('-_id').exec((err, articles) => {
            
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los articulos'
                });
            }

            if(!articles){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar'
                });
            }

            return res.status(200).send({
                status: 'success',
                articles
            });
        });
        
    }

}; //end controller

//Ahora tengo que exportar
module.exports = controller;




