//Creando un nuevo componente: en components creo la carpeta Peliculas,js e importo React
import React, { Component } from 'react';
//Ahora puedo importar en peliculas.js el mensajeestatico


class Peliculas extends Component {
    render() {
        return (
            <div id="peliculas">
                <h2 className="subheader">Peliculas</h2>
                
            </div>
        );
    }
}

export default Peliculas;
//Ahora voy en app.js para importarlo

//Vamos hacer un LISTADO DE PELICULAS