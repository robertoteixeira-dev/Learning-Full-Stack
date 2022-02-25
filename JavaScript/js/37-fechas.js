'use strict'

//Crea el objeto date con new
var fecha = new Date(); //Si en la consola pongo new Date(); me muestra con la hora actualizada

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();

//Para hacer un texto que me muestr el año, el mes
var textoHora = `
El año es: ${year}
El mes es: ${mes} //muestre contando del 0
El dia es: ${dia}
La hora es: ${hora}
`; //Puedo hacer get.minute, get.second y etc


//En la consola va a aparecer la fecha del dia actual
console.log(fecha);

//En la consola va a aparecer el año
console.log(textoHora);


//Search JavaScript Math

