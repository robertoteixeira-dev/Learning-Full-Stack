var years = 30;

do{
    alert("SOLO CUANDO SE A DIFERENTE A 20 ");
    years--;

}while(years > 25)

//nos permite hacer algo y luego ejecutar 


var year = 2018;
while(year != 1991){
    console.log("Estamos en el año: "+year);

    if(year == 2000){
        break
    }

    year--;
}