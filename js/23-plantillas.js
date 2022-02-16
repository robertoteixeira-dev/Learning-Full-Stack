'use strict'

//Plantillas de texto
//Yo puedo sustituir valores dentro de un string sin necesitar estar concatenando, es decir, puedo tener una plantilla

var nombre = prompt("Mete tu nombre");
var apellidos = prompt("Mete tus apellidos");

//Haciendo sin plantilla:
var texto = "Mi nombre es: "+nombre+" <br/> Mis apellidos son: "+apellidos;

//Haciendo con plantilla:
var texto = `
<h1>Hola que tal</h1>
<h3>Mi nombre es: ${nombre}</h3>
<h3>Mis apellidos son: ${apellidos}</h3>
`;
document.write(texto);






