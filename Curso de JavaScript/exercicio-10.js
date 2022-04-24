// Números primos
//Um número primo é um número que é dividido apenas por 1 e por ele mesmo
//Exemplo: 10 é dividido por varios numeros, então não é primo
//Exemplo: 11 só é dividido por 1 ou 11, então é número primo

exibirNumerosPrimos(15);

/*
function exibirNumerosPrimos(limite) {
    for(let numero = 2; numero <= limite; numero++){
       let ehPrimo = true;

       for(let divisor = 2; divisor < numero; divisor++){
           if(numero % divisor === 0){
               ehPrimo = false;
               break;
           }
       }
       if(ehPrimo) console.log(numero);
    }
}
*/

//É necessário reorganizar essa função para que ela faça apenas uma coisa 
function exibirNumerosPrimos(limite) {
    for (let numero = 2; numero <= limite; numero++) {

        if (numeroPrimo(numero)) console.log(numero);
    }
}

function numeroPrimo(numero) {
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            return false;
            //Não precisa mais do break aqui
        }
    }
    return true;
}






