import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';

class Router extends Component {

    render() {
        return (
            <Router>

                <div className="Router">
                    
                    <Route exact path="/" component={Peliculas} />
                    <Route exact path="/ruta-prueba" component={SeccionPruebas} />
                    <Route exact path="/mi-componente" component={MiComponente} />

                </div>

            </Router>
        );
    }
}


export default Router;

//Hay que importar el react router dom
//Dentro de la etiqueta BrowserRouter van a ir todas las configuraciones del router
//Dentro de la etiqueta Switch van a ir todas las rutas

//Después, importo en App.js







