import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="center">
                    {/*LOGO Para hacer comentarios en React*/}
                    <div id="logo">
                        <img src={logo} className="app-logo" alt="Logotipo" />
                        <span id="brand">
                            <strong>Curso</strong>React
                        </span>
                    </div>

                    {/*MENU*/}
                    <nav id="menu">
                        <ul>
                            <li>
                                <a href="index.html">Inicio</a>
                            </li>
                            <li>
                                <a href="blog.html">Blog</a>
                            </li>
                            <li>
                                <a href="formulario.html">Formulario</a>
                            </li>
                            <li>
                                <a href="#">Pagina 1</a>
                            </li>
                            <li>
                                <a href="#">Pagina 2</a>
                            </li>
                        </ul>
                    </nav>

                    {/*LIMPIAR FLOTADOS*/}
                    <div className="clearfix"></div>
                </div>
            </header>
        );
    }
}

export default Header;
//Crea el componente, importa React, crea el render y return y pone el HTML
//Modifica la manera de hacer comentarios, de hacer clases y de importar el logo
//Importa el componente en el app.js
//Pone el componente en el return del app.js <Header />
