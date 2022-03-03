import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';

class Router extends Component{

    render(){
        return(
            <BrowserRouter>
            
            <Switch> 
                <Route path="/ruta-prueba" component={SeccionPruebas} />
                <Route path="/segunda-ruta" component={MiComponente} />
            </Switch>

            </BrowserRouter>
        );
    }
}

export default Router;

//Hay que importar el react router dom
//Dentro de la etiqueta BrowserRouter van a ir todas las configuraciones del router
//Dentro de la etiqueta Switch van a ir todas las rutas

//Después, importo en App.js







