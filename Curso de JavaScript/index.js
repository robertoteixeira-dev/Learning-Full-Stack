console.log('Bem vindo ao curso')

//VARIÁVEIS
let idade = 5; 
console.log(idade);

//Não se pode começar o nome de uma variável com um número e nem espaço
//Para nomes grandes, colocar assim - ex: nomeCompleto

let nome = 'Roberto'
console.log(nome);

let valorIngressoAdulto = 20;
valorIngressoAdulto = 30;
console.log(valorIngressoAdulto);
//O let permite que eu redefina os valores

//Quando não quero que possa mudar, utilizo un const

const valor = 20; 
// É preferível utilizar mais o const

//TIPOS PRIMITIVOS
//Temos os tipos de referência e os tipos de valores

//Tipos de referência
let name = 'Rafael'; //Isso é chamado de string literal, ou seja, armazena letras, frases, nomes com numeros e símbolos
let age = 25; //number literal - armazena um número
let estaAprovado = true; // boolean - ajuda a construir regras, dizendo se algo está ou não, se é sim ou não e etc
let sobrenome = undefined; //Undefined - Não é recomendado utilizar isso
let corSelecionado = null; //Utilizo quando quero resetar um valor, por exemplo, em um sistema onde a pessoa escolhe a cor o fundo da página. Após um usuário utilizar, quando outro usuário quer utilizar o null vai resetar para esse novo usuário escolher

//TIPAGEM DINÂMICA
//Existe uma função para identificar o tipo de uma variável 
typeof nome;

//OBJETOS
//Objetos vão juntar informações sobre algo do mundo real em um lugar só, onde irei colocar a classe e as propiedades

let pessoa = { //Objeto
    //Dentro crio a classe e coloco as propiedades dentro
    name: 'Roberto', // key + identifier + value 
    lastName: 'Teixeira',
    Aprovado: true,
    idade: 24
}; 

console.log(pessoa);

let series = {
    primeiraSerie: 'Elite',
    segundaSerie: 'Pose',
    terceiraSerie: 'Friends'
}

console.log(series);

//ARRAYS
//É um conjunto de dados que pode ser acessado por un índice
//Um índice é uma posição exata de uma informação

let familia = [26,45,'jhonatan',17]; //Temos 4 elementos, seus índices começam em 0, ou seja, 0-3
//Array também faz parte dos objetos
console.log(familia.length);

console.log(familia);
console.log(familia[2]); //Com isso, vou selecionar apenas a informação que está na posição 2

let nomeNamorado = ['vitor', 22, 'La Plata'];
console.log(nomeNamorado);

//FUNÇÕES
//A função faz parte da base de todo software porque controla o fluxo de execução (entrada e saída de dados)

//Para nomear uma função: coloque um VERBO + SUBSTANTIVO

let corSite = "azul"; //Criei uma variável e defini que é azul

/*
function resetaCor(){
    corSite = ""; //Coloquei a clase e deixei vazia, para poder resetar a cor que for escolhida
};

console.log(corSite); //Para ver como está antes de resetar
//Agora chamo a função:
resetaCor();
//Agora se eu verifico novamente, verei que está vazio porque foi resetado
console.log(corSite);
*/

//Se eu quero colocar mais funcionalidades em uma função eu tenho que colocar parametros

//coloco a variavel dentro: cor e depois coloco como argumento na classe
function resetaCor(cor, tonalidade){
    corSite = cor + ' ' + tonalidade; //De o espaço para não ficar colado 
};
//Se eu verifico, verei que está o que eu defini
console.log(corSite);
//agora com a função, posso mudar 
resetaCor("Vermelho","claro"); 
//se verifico novamente, verei que está alterado
console.log(corSite);

//Se quero colocar mais parametros, posso por e concatenar com o +


//TIPOS DE FUNÇÃO
//Temos dois tipos:
// 1 - Realiza uma tarefa e não devolve nada

function dizerNome(){
    console.log('Roberto');
}

dizerNome();

// 2 - Realiza e devolve algo
function MultiplicarPorDois(valor){
    return valor*2;
}

//Posso fazer diretamente com o console ou criar uma variavel primeiro

//console.log(MultiplicarPorDois(5));

let resultado = MultiplicarPorDois(5);
console.log(resultado);

// OPERADORES
//No JS nos temos varios operadores lógicos: temos variaveis e operadores que nos ajudam a criar expressões, é com eles que fazemos a lógica
// Operadores aritiméticos(matematicos) 
// Operadores de atribuição
// Operadores de Comparação
// Operadores lógicos
// Operadores Bitwise

// OPERADORES ARITIMÉTICOS
let salario = 100;

// podemos utilizar operadores matematicos: + , - , * , / , ** (exponencial que é o número vezes ele mesmo) 

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario ** salario);

console.log(5 ** 5);

//Operadores de incremento e decremento: ++ --
let idadee = 18
console.log(++idadee);
console.log(--idadee);

// OPERADORES DE ATRIBUIÇÃO
//É o = que utilizamos quando atribuimos nas variáveis
let valorTeclado = 100;
console.log(valorTeclado);
//Posso fazer ele + ele mesmo, também posso fazer com o -
valorTeclado += valorTeclado;
console.log(valorTeclado); 

// OPERADORES DE IGUALDADE
// Igualdade estrita
console.log( 1 === 1); //Vai retornar um true. Ele está comparando os valores e o tipo, por isso tem 3 =
console.log ('1' === 1); //Ele vai retornar falso, pois um é string e o outro é number

// Igualdade solta
console.log( 1 == 1 ); //Vai retornar true pois ele ignora o tipo e compara apenas os valores
//Caso os tipos sejam diferentes ele vai converter para que fiquem iguais, mas isso não é muito recomendado
console.log('1' == 1);

// OPERADORDE TERNÁRIO
// Imagine que você tem um cliente, se ele tiver mais de 100 pontos ele é premium, caso contrario é um cliente comum 
let pontos = 101;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);

// OPERADORES LÓGICO - and, or, not
// Operador lógico: and && - retorna true se os dois operandos forem true

console.log(true && true); //retorna true porque as duas condições boleanas são true
console.log(true && false); //retorna false porque não são iguais

//Imagine alguem se so pode aplicar pra uma vaga se tiver carteira de trabalho
/*
let maiorDeIdade = true;
let PossuiCarteira = true;
let podeAplicar = maiorDeIdade && PossuiCarteira;

console.log(podeAplicar);
*/

// Operador lógico: or - || - retorna true se um dos operandos forem true

let maiorDeIdade = false;
let PossuiCarteira = true;
let podeAplicar = maiorDeIdade || PossuiCarteira;

console.log(podeAplicar);

// Operador lógico: not - ! 
let candidatoRecusado = !podeAplicar;
console.log(candidatoRecusado); //Vai retornar falso porque ele não foi recusado

//Comparação lógica com os valores não boleanos
// Falsy - São todos os valores: 
//underfined, 
//null, 
//0, 
//false, 
//'' 
//ou NaN (Not a number)

//Truthy - são os valores que não são os de acima 

let corPersonalizada = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil); //Ele vai exibir o vermelho porque ele para após encontrar o primeiro valor truthy







