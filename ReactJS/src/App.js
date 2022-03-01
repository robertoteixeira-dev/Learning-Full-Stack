
import './assets/css/App.css';

//Importar componentes:

import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';
import Peliculas from './components/Peliculas';

//En el contenido cambia para div className="center" y section id="content" y pone el <Sidebar />

function App() {

  var buttonString = "Ir al blog"; //Creo una variable y la  puedo pasar en la Prop

  return (
    <div className="App">

      <Header />
      <Slider 
      title="Aprendiendo Props"
      btn={buttonString}
      />

      <div className="center">

        <Peliculas/>

        <Sidebar />

        <div className="clearfix"></div>

      </div> {/*END DIV CENTER*/}
      
      <Footer />

    </div>
  );
}
//En el App.js tiene que poner el clearfix

export default App;

//Un componenete es un trozo de pantalla, es decir, la  parte lógica que controla un trozo de pantalla. Lo que vemos en la página son varios trozos de pantallas. 
//Lo que hace un componente es ser un mediador entre lo que ve el usuario y la lógica de la aplicación, os sea, un componente es una especie de controlador que recibe datos, procesa esos datos y pide datos a los modelos ejecutando una lógica para sacar información de un backend, utiliza un modelo de datos para sacar alguna cosa o hacer alguna lógica y luego se lo devuelve a la pantalla. 

//Podemos crear una carpeta de componentes y dentro crear una carpeta para cada parte de nuestra aplicación
//Puedo crear una carpeta de assets y dentro crear una carpeta de images y css (donde puedo poner el app.css y el index.css)
//Hay que organizar las importaciones en app.js y en index.js poniendo /assets/css y etc

//Ahora creamos el componente: MiComponente.js

//Para crear una clase no se puede poner class="" sino que className=""


//Existen compojentes estáticos en ls cuales no podemos hacer tantas funcionalidades. Se crean cuando va a ser una parte de la  pantalla que va a ser estático.

//El estado es la forma que tiene React de almacenar propiedades y datos que los componentes van a estar mostrando y que además queremos que sean completamente dinámico, es decir, que cuando un dato del estado cambie se vea reflejado inmediatamente en la vista/pantalla del usuario sin necesidad de recargar la página




