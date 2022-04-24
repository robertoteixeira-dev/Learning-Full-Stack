//Identificador de string - como ler propriedades dentro de um objeto

//Criar um método para ler propiedades de um objeto e 
// exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    título: 'Vingadores',
    ano: 2018,
    personagem: 'Spiderman'
}

exibirPropriedades(filme);

function exibirPropriedades(obj) {
    for(prop in obj)
    if(typeof obj[prop] === 'string'){
        console.log(prop, obj[prop]);
    }
}





