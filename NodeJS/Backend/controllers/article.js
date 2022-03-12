//Acá vamosa tener los diferentes metodos y rutas relacionadas con artículos de nuestra API

'use strict'

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
    }
}; //end controller






