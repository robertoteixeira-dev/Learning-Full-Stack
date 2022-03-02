
//Um objeto é uma coleção de propriedades e essa propriedade contem um nome e um valor, ou seja, é uma variavel que contem outras variaveis dentro dela
//Exemplo: Objeto - Xícara / Propriedades - cor, tamanho, utilidade e etc

//Criando um OBJETO
let xicara = {
    cor: "Branco", //Vamos passar um conjunto de chave valor
    tamanho: "Pequeno",
    doQue: "Café",
    xicaraEmCimaDoPrato: 1
}
//Para que esse objeto apareça no meu console:
console.log(xicara);
//Para acessar cada propriedade individualmente:
console.log(xicara.cor);
//Para adicionar uma propriedade
xicara.tempo = "velho"
console.log(xicara);
//Para deletar propiedades de um objeto
delete xicara.cor
console.log(xicara);

//Adicionando um ARRAY dentro do meu Objeto
xicara.material = ["porcelana", 'vidro']
console.log(xicara);

//Adicionando Objetos dentro de um Objeto
xicara.especificaçoes = {
    marcas: "cristais",
    contato: "https://www.cristais.com"
} 
console.log(xicara);
//Adicionar Objetos com Array
xicara.localizaçao = {
    local: ['brasil', 'argentina']
}
console.log(xicara);


//Adicionar uma FUNÇÃO pra dentro de um Objeto

let multiplicaçao = {
    calc: function(n1, n2){
        return n1 + n2
    }
}
console.log(multiplicaçao.calc(5,3));

//Adicionar uma VARIAVEL como valor pra dentro de um Objeto
const marca = "ferrari" // crio uma variavel

let carro = { //crio um objeto
    ano: 2020, //agora coloco as propriedades
    marca, //Ou seja, ao invez de especificar a marca, eu passei a variavel marca que é = ferrari. Como seria o mesmo nome marca: marca eu posso colocar apenas marca, 
} 

console.log(carro);