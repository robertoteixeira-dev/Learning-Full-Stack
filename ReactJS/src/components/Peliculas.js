//Creando un nuevo componente: en components creo la carpeta Peliculas,js e importo React
import React, { Component } from 'react';
//Ahora puedo importar en peliculas.js el mensajeestatico
import Pelicula from './Pelicula';


class Peliculas extends Component {
    //Creo un array de peliculas para hacer el listado
    state = {
        peliculas: [
            { titulo: 'Batman vs Superman', image: 'https://wipy.tv/wp-content/uploads/2021/02/zack-snyder-restaurara-batman-v-superman-1200x720.jpg' },
            { titulo: 'Harry Potter', image: 'https://elplanetaurbano.com/wp-content/uploads/2022/02/Harry-Potter-epu.jpg' },
            { titulo: 'Spiderman', image: 'https://cdn.inprnt.com/thumbs/70/59/705922351a9bc40bef471525b3e7a290.jpg?response-cache-control=max-age=2628000' }
        ], //Puedo poner más propiedades 
        nombre: 'Roberto Teixeira',
        favorita: {}
    };

    //Para cambiar algo en un componente
    cambiarTitulo = () => {
        var { peliculas } = this.state;

        peliculas[0].titulo = "Batman Begins";

        this.setState({
            peliculas: peliculas
        });
    }
    //Defino la funcion y pongo en el render
    favorita = (pelicula) => {
        console.log("FAVORITA MARCADA");
        console.log(pelicula);
        this.setState({
            favorita: pelicula
        });

    }

    //Ahora puedo crear un boton para el usuario hacer el cambio

    //Si quiero que se cambie de un titulo aleatorio, pongo:
    //var random = Math.floor(Math.random() * 3);
    //peliculas[random].titulo = "Batman Begins";

    render() {
        //Para dar estilo
        var pStyle = {
            background: 'gray',
            color: 'white',
            padding: '10px'
        }

        return (
            <div id="content" className="peliculas">
                <h2 className="subheader">Peliculas</h2>
                <p>Selección de las peliculas elejidas por {this.state.nombre}</p>
                <p>
                    <button onClick={this.cambiarTitulo}>
                        Cambiar titulo de Batman
                    </button>
                </p>

                { //Haciendo una condicion
                    this.state.favorita.titulo &&
                    <p
                        className="favorita"
                        style={pStyle} >

                        <strong>La pelicula favorita es: </strong>
                        <span>{this.state.favorita.titulo}</span>
                    </p>
                }

                {/*Creo un componente pelicula para no llenar de codigo*/}

                <div id="articles" className="peliculas">

                    {
                        this.state.peliculas.map((pelicula, i) => {
                            return (
                                <Pelicula
                                    key={i}
                                    pelicula={pelicula}
                                    indice={i}
                                    marcarFavorita={this.favorita}
                                />
                            )
                        })
                    }

                </div>

            </div>
        );
    }
}//Y poner el nuevo component en el return

export default Peliculas;
//Ahora voy en app.js para importarlo

//Vamos hacer un LISTADO DE PELICULAS



/*
//Para hacer condiciones dentro del RETURN
//Haciendo una condicion, es decir, un IF en React
{
    this.state.favorita.titulo &&
        <p
            className="favorita"
            style={pStyle} >

            <strong>La pelicula favorita es: </strong>
            <span>{this.state.favorita.titulo}</span>
        </p>
}

//Haciendo un IF más complejo y con un else
{
    this.state.favorita.titulo ? (
        <p
            className="favorita"
            style={pStyle} >

            <strong>La pelicula favorita es: </strong>
            <span>{this.state.favorita.titulo}</span>
        </p>
    ) : (
        <p>No hay pelicula favorita</p>
    )
}
//El ? es el IF y el : es el ELSE

//Fuera del return puedo hacer condiciones igual que en JS
var favorita;
if (this.state.favorita.titulo) {
    favorita = (
        <p
            className="favorita"
            style={pStyle} >

            <strong>La pelicula favorita es: </strong>
            <span>{this.state.favorita.titulo}</span>
        </p>
    )
} else {
    favorita = (
        <p>No hay pelicula favorita</p>
    )
}

//Haciendo un BUCLE en el RETURN en React: utilizo el map
<div id="articles" className="peliculas">

    {
        this.state.peliculas.map((pelicula, i) => {
            return (
                <Pelicula
                    key={i}
                    pelicula={pelicula}
                    indice={i}
                    marcarFavorita={this.favorita}
                />
            )
        })
    }

</div>
*/