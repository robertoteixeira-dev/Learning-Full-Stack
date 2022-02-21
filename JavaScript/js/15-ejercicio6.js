'use strict'

//Que nos diga si un numero es par o impar
//Que nos diga cual es la ventana, por ejemplo la ventana prompt
//Tiene que comprobar si, cuanto mete un numero si es valido, si no es valido que nos pida de nuevo el numero


var number = parseInt(prompt('Introduce un numero', 0));

while(isNaN(number)){
    var number = parseInt(prompt('Introduce un numero', 0));
}

if(number % 2 == 0){
    alert("Es un numero par");
}else{
    alert("Es impar");
}



