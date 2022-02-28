import React, { Component } from 'react';
import MiComponente from './MiComponente';
import Peliculas from './Peliculas';


class SeccionPruebas extends Component {

    //Podemos tener varias propiedades, ejemplo:
    contador = 0; //Y después mostrarla abajo
    
    constructor(props){ //Eso es un state (estado) creado de manera clasica
        super(props);

        this.state = {
            contador: 0
        };
    }

    HolaMundo(name, edad) { //Como esta dentro de la clase puedo definirla de esta manera, sin poner el function
        var introduction =
            <div>
                <h2>Hola, soy {name} </h2>
                <h3>Tengo {edad} años </h3>
            </div>;

        return introduction;
    }

    //Definiendo MÉTODOS
    sumar = (e) => {
      this.setState({
          contador: (this.state.contador + 1)
      });
    }
//Si pongo el = (e) => no necesito pasar el bind(this) 
//Otra manera de hacer MÉTODOS
    restar = (e) => {
        this.setState({
            contador: (this.state.contador - 1)
        });
    }

    render() {

        var name = "Roberto Teixeira";

        return (
            <section id="content">

                <h2 className="subheader">Últimos artículos</h2>
                <p>
                    Hola bienvenido al curso de React.JS de Victor Robles.
                </p>

                <h2 className="subheader">Funciones y JSX Básico</h2>
                {this.HolaMundo(name, 24)}

                <h2 className="subheader">Componentes</h2>
                <section className="componentes">
                    <MiComponente />
                    
                </section>

                <h2 className="subheader">El Estado</h2>
                <p>
                    Contador: {this.state.contador} 
                </p> 
                
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar}/>
                    <input type="button" value="Restar" onClick={this.restar}/>
                </p>
                
            </section>
        );
    }
}

export default SeccionPruebas;

//Cuando creo un componente, es decir, un objeto puedo pasarle propiedades o argumentos.  




