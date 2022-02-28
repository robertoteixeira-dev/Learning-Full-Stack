import logo from './assets/images/logo.svg';
import './assets/css/App.css';


//Importar componentes:
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Header from './components/Header';
import Slider from './components/Slider';

//Ahora puedo crear un objeto y utilizar mi componente

function HolaMundo(name, edad) {
  var introduction =
    <div>
      <h2>Hola, soy {name} </h2>
      <h3>Tengo {edad} años </h3>
    </div>;

  return introduction;
}

function App() {

  var name = "Roberto Teixeira";

  return (
    <div className="App">

      <Header />
      <Slider />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {HolaMundo(name, 24)}

        <section className="componentes">
          <MiComponente />
          <Peliculas />
        </section>

      </header>
    </div>
  );
}

export default App;

//Un componenete es un trozo de pantalla, es decir, la  parte lógica que controla un trozo de pantalla. Lo que vemos en la página son varios trozos de pantallas. 
//Lo que hace un componente es ser un mediador entre lo que ve el usuario y la lógica de la aplicación, os sea, un componente es una especie de controlador que recibe datos, procesa esos datos y pide datos a los modelos ejecutando una lógica para sacar información de un backend, utiliza un modelo de datos para sacar alguna cosa o hacer alguna lógica y luego se lo devuelve a la pantalla. 

//Podemos crear una carpeta de componentes y dentro crear una carpeta para cada parte de nuestra aplicación
//Puedo crear una carpeta de assets y dentro crear una carpeta de images y css (donde puedo poner el app.css y el index.css)
//Hay que organizar las importaciones en app.js y en index.js poniendo /assets/css y etc

//Ahora creamos el componente: MiComponente.js

//Para crear una clase no se puede poner class="" sino que className=""


//Existen compojentes estáticos en ls cuales no podemos hacer tantas funcionalidades. Se crean cuando va a ser una parte de la  pantalla que va a ser estático.

