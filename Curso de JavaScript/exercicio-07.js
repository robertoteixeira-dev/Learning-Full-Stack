//Criar função de somar que retorna a some de todos os múltiplos de 3 e 5

// Multiplos de 3 dentro de 10 - 3, 6, 9
// Multiplos de 5 dentro de 10 - 5, 10

// Somando os multiplos e retornando o resultado
// 1. Armazenar os multiplos de 3 
// 2. Armazenar os multiplos de  5 
// 3. somar os dois 
somar(10);

function somar(limite) {
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;

    for(i = 0; i <= limite; i++){
        if(i % 3 === 0){
            multiplosDe3 += i;
        }else if(i % 5 === 0){
            multiplosDe5 += i;
        }
    }
    console.log(multiplosDe3 + multiplosDe5);
}









