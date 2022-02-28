//Creando un nuevo componente: en components creo la carpeta Peliculas,js e importo React
import React, { Component } from 'react';
//Ahora puedo importar en peliculas.js el mensajeestatico
import MensajeEstatico from './MensajeEstatico';

class Peliculas extends Component {
    render() {
        return (
            <div id="peliculas">
                <h4>Soy el componente de peliculas</h4>
                <MensajeEstatico />
            </div>
        );
    }
}

export default Peliculas;
//Ahora voy en app.js para importarlo

