//IF - ELSE
// Se a hora estiver entre 6 até 12, vamos exibir: Bom dia
// Se estiver entre 12 até 20h, vamos exibir: Boa tarde
// Caso contrario: Boa noite

let hora = 10;

if (hora > 6 && hora < 12) {
    console.log("Bom dia");
} else if (hora > 12 && hora < 18) {
    console.log("Boa tarde");
} else {
    console.log("Boa noite");
}

//SWITCH - CASE
let permissao; // Pode ser um usuário comum, gerente ou diretor

/*
switch (// variavel) {
    case 'comum': // aqui colocamos os cenários, colocamos dois pontos para dizer o que irá acontecer
    console.log('usuario comum');
    break; // colocamos o break para que ele não continue avaliando as outras condições

    case 'gerente':
        console.log('usuario gerente');
        break;

    case 'diretor':
    console.log('usuario diretor');
    break;

    default: //Caso não caia em nenhuma das condições 
    console.log("usuario não reconhecido");
}   
*/

// LAÇO/LOOP/FOR 
// Temos 5, que fazem a mesma coisa mas em cenários diferentes
// 1. For
// 2. While
// 3. Do..while
// 4. For..In
// 5. For..of 

// FOR
for(let i = 0; i < 10; i++){
    console.log("Estou aprendendo!",i);
}

//Números ímpares
for(let i = 5; i >= 1; i--){
    if(i % 2 !== 0){ //operador modulus 
        console.log(i);
    }
}

// WHILE  - A diferença é que você precisa declarar a variavel de indice fora do loop
let i = 5;

while(i >= 1) {
    if(i % 2 !== 0){ 
        console.log(i);
    }
    i--;
}

// DO - WHILE
// É menos usado
let n = 0;

do {
    console.log('digitando');
    n++;
}while(n < 10)

//FOR IN
const pessoa = {
    nome: 'Roberto',
    idade: 24
}
// key-value (exemplo: nome é key e 'Roberto' é o value)
for(let chave in pessoa) {
    console.log(chave,pessoa.nome); // também se pode acessar a propiedade por cochete ['nome]
}

//Exemplo em um array
const cores = ['Vermelho', 'Azul', 'Verde'];
for (let indice in cores){ //Definimos indice porque em array todas as propiedades são indices
    console.log(indice); //Vai exibir os números de cada indice
    console.log(cores[indice]); //Agora sim vai mostrar as propiedades
}

// FOR - OF












