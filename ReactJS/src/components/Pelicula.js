import React, {Component} from 'react';

class Pelicula extends Component {

    marcar = () => {
        this.props.marcarFavorita(this.props.pelicula);
    }

    render() {

        const { titulo, image } = this.props.pelicula;

        return (
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={image} alt={titulo} />
                </div>

                <h2>{titulo}</h2>
                <span className="date">
                    Hace 5 minutos
                </span>
                <a href="#">Leer más</a>
                
                <button onClick={this.marcar}>
                    Marcar como favorita
                </button>

                <div className="clearfix"></div>
            </article>
        );
    }
}
//En pelicula.js
export default Pelicula;

//Creo el componente pelicula.js
//Creo el boton para marcar como favorita

//Eventos del ciclo de vida de un componente
//Hay tres principales. El más importante es el render, que si encarga de mostrar por pantalla
//El componente pasa por 3 estados en el ciclo de vida
//1. cuando se monta, 2. cuando se muestra (render), 3. cuando se desmonta
/*
componentWillMount() { //Si ejecuta antes que el componente se monte
    this.setState({
        //Acá pongo las peliculas
        peliculas: [
            {titulo: '', image: ''}
        ]
    });
} 

componentDidMount() { //Si ejecuta cuando el componente esta montado

}

componentWillUnmount(){ //Se produce cuando vamos saltar de una ruta a otra, cuando se va a desmontar un componente

}
*/





