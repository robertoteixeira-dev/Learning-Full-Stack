'use strict'
//Ver que tamaño tiene la ventana del navegador, cómo redirigir de una web a otra y etc

//Ver que tamaño tiene la ventana
function getBom() {
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    //or
    console.log(screen.width);
    console.log(screen.height);
    //Sacar la URL
    console.log(window.location);
    console.log(window.location.href);
}

//Para ir a alguna página
function redirect(url){
    window.location.href = url;
}
//Después, en la consola pone redirect("https://google.com");

//Para que abra una nueva ventana en alguna página
function abrirVentana(url){
    window.open(url);
}
//Además, pasarle propiedades
function abrirVentana(url){
    window.open(url, "", "width=400, height=300");//Con eso abre una nueva ventana con el tamaño que yo elegi 
}

//Llamar la función
getBom();








