'use strict'

//Tabla de multiplicar de un numero introducido por pantalla

var numero = parseInt(prompt("De que numero quieres la tabla?", 1));

document.write("<h1>Tabla del "+numero+"</h1>");
for (var i = 1; i <= 10; i++) {
    document.write(i+" x "+numero+" = "+(i * numero)+"<br/>");
}


//Para hacer de todas las tablas de multiplicar

for (var c = 1; c <= 10; c++) {
    document.write("<h1>Tabla del "+c+"</h1>");
    for (var i = 1; i <= 10; i++) {
        document.write(i+" x "+c+" = "+(i*c)+"<br/>");
    }
}
//Va a venir hasta la de 10 porque yo puse <= 10;


