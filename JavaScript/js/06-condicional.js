var edad1 = 15;
var edad2 = 12;

if (edad1 > edad2) {
    console.log("Edad1 es mayor que edad2");
}
else {
    console.log("Edad1 es inferior");
}

var edad = 70;
var nombre = 'Roberto';

if (edad >= 18) {
    console.log(nombre + " tiene " + edad + " años, es mayor de edad ");


if (edad <= 33) {
    console.log(" todavia eres millenial ");
}

else if(edad >= 70){
    console.log(" Eres anciano ");
}

else{
    console.log('Ya no eres millenial');
}

}

else {
    console.log(nombre + " tiene " + edad + " años, es menor de edad ");
}

//Negación
var year = 2018;
if(year != 2016){
    console.log("El año no es 2016, realmente es: " +year);
}

//AND
if(year >=2000 && year <= 2020){
    console.log("Estamos en la era actual");
}
else{
    console.log("Estamos en la era post moderna");
}

//OR
if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("El año acaba en 8")
} else{
    console.log("Año no registrado");
}