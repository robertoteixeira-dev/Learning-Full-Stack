'use strict'

//ALERTA
alert("Está es mi alerta!");

//ALERTA DE CONFIRMACIÓN
var mi_resultado = confirm("Está seguro de querer continuar?");
console.log(mi_resultado);

//VENTANA DE INGRESO DE DATOS
//puede recibir dos parametros, el primero es el texto y el seguro parametro es el valor
var mi_resultado = prompt("Que edad tienes?", 18);
console.log(mi_resultado);
//este resultado siempre va a ser un string, si quiero convertir a otro tipo de dato puedo utilizar la funcion number, y otras.
