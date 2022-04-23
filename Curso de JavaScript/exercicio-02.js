// Escreva uma função que usa dois números e retorna o maior entre eles
function maiorQue(n1, n2){
    if(n1 > n2){
        console.log("O maior número é: " + n1);
    }else if(n1 == n2){
        console.log("Os valores são iguais");
    }else{
        console.log("O maior número é: " + n2)
    }
}

maiorQue(4,6)


//Outra maneira de fazer
function max(numero1, numero2){
    return numero1 > numero2 ? numero1: numero2 ;
}

max(3, 9)