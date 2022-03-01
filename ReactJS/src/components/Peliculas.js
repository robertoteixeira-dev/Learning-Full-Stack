//Creando un nuevo componente: en components creo la carpeta Peliculas,js e importo React
import React, { Component } from 'react';
//Ahora puedo importar en peliculas.js el mensajeestatico


class Peliculas extends Component {
    //Creo un array de peliculas para hacer el listado
    state = {
        peliculas: [
            { titulo: 'Batman vs Superman', image: 'https://wipy.tv/wp-content/uploads/2021/02/zack-snyder-restaurara-batman-v-superman-1200x720.jpg' },
            { titulo: 'Harry Potter', image: 'https://elplanetaurbano.com/wp-content/uploads/2022/02/Harry-Potter-epu.jpg' },
            { titulo: 'Spiderman', image: 'https://cdn.inprnt.com/thumbs/70/59/705922351a9bc40bef471525b3e7a290.jpg?response-cache-control=max-age=2628000' }
        ], //Puedo poner más propiedades 
        nombre: 'Roberto Teixeira'
    };


    render() {
        return (
            <div id="content" className="peliculas">
                <h2 className="subheader">Peliculas</h2>
                <p>Selección de las peliculas elejidas por {this.state.nombre}</p>

                {/*Creo un componente pelicula para no llenar de codigo*/}

                <div id="articles" className="peliculas">

                    {
                        this.state.peliculas.map((pelicula, i) => {
                            return (
                                <article class="article-item" id="article-template">
                                    <div class="image-wrap">
                                        <img src={pelicula.image} alt={pelicula.titulo} />
                                    </div>

                                    <h2>{pelicula.titulo}</h2>
                                    <span class="date">
                                        Hace 5 minutos
                                    </span>
                                    <a href="#">Leer más</a>

                                    <div class="clearfix"></div>
                                </article>
                            )
                        })
                    }

                </div>

            </div>
        );
    }
}

export default Peliculas;
//Ahora voy en app.js para importarlo

//Vamos hacer un LISTADO DE PELICULAS