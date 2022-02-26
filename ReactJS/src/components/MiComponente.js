//Acá debemos importar react
import React from 'react'; //Importo react y cargo el modulo de node 'react'

//Ahora defino una clase de javascript
class MiComponente extends React.Component{
    render(){ //El metodo render es el que si encarga de mostrar informacion por pantalla al usuario, es decir, mostrar el js y el HTML al usuario
        return(
            <h1>Hola, soy el componente llamado: MiComponente</h1>
        );
        
    } 
}
//Ahora puedo exportar mi componente para poder utilizarlo dentro de cualquier otra vista
export default MiComponente;
//Voy en app.js e importo mi componente

//Otra forma de hacer componentes {}
//import React, {component} from 'react';
