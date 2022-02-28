//Acá debemos importar react
import React from 'react'; //Importo react y cargo el modulo de node 'react'

//Ahora defino una clase de javascript
class MiComponente extends React.Component {

    render() { //El metodo render es el que si encarga de mostrar informacion por pantalla al usuario, es decir, mostrar el js y el HTML al usuario

        let receta = { //mi objeto JSON creado con una variable y sus propriedades
            nombre: 'pizza',
            ingredientes: ['tomate', 'queso', 'jamon cocido'], //un array con los ingredientes
            calorias: 400
        }


        return (
            <div className="mi-componente">
                <h1>Hola, soy el componente llamado: MiComponente</h1>
                <h2>Estoy probando el componente con react.fragment</h2>
                <h1>{'Receta: ' + receta.nombre}</h1>
                <h2>{'Calorias: ' + receta.calorias}</h2>
                <ol>
                    { //Puedo mostrar todo en un ol
                        receta.ingredientes.map((ingrediente, i) => { //El map lo que hace es recoger un array y sacarme los datos
                            console.log(ingrediente); //Para mostrar en la consola
                            return ( //Para mostrar en la pantalla
                                <li key={i}> 
                                    {ingrediente} 
                                </li>
                            );
                        }) //Cuando hago un bucle de este tipo es importante indicarle el atributo key={}
                    } 
                </ol>
                <hr />
            </div>

        );

    }
}
//Ahora puedo exportar mi componente para poder utilizarlo dentro de cualquier otra vista
export default MiComponente;
//Voy en app.js e importo mi componente

//Otra forma de hacer componentes: utilizando {}
//import React, {component} from 'react';

//Si yo pusiera un <h2> abajo del <h1> no funcionaria porque el return solo puede mostrar una etiqueta. Entonces creamos un <React.Fragment>
//Yo también podría utilizar el div en lugar del react.fragment








