//Un modelo es una clase que nos da un molde para crear diferentes objetos utilizando ese modelo
//Ejemplo: Si yo defino un modelo de un articulo, creo un esquema del articulo y defino que propiedades va a tener ese artículo, cada uno de ls objetos que yo cree, que estructura va a tener el documento cuando yo lo guarde en la colección de MongoDB
//Sobre ese modelo voy a poder estar interactuando sobre la base de datos y utilizarlo para crear nuevos artículos 

'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = Schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now }, 
    image: String
});

module.exports = mongoose.model('Article', ArticleSchema);
// Cuando guarda un articulo nuevo pluralisa y cria una colleccion llamada articles
// articles --> guarda documentos de este tipo y con estructura dentro de la colección





