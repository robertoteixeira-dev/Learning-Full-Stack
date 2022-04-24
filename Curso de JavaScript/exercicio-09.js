// Contador de Asterísco
//Criar uma função que exibe a quantidade de * que uma linha possui

exibirAsteriscos(10);

function exibirAsteriscos(linhas) {
    /*
    let padrao = '';
    
    for(let linha = 1; linha <= linhas; linha++){
        padrao += '*';
        console.log(padrao);
    }
    */
//Outra maneira de fazer 
    for(let linha = 1; linha <= linhas; linha++){
        let padrao2 = '';
        for(let i = 0; i < linha; i++){ //Loop nested ou interior
            padrao2 += '*'
        }
        console.log(padrao2);

    }
}







