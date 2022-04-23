//Medidor de velocidade

//Velocidade máxima de até 70km
// A cada 5km acima do limite você ganha 1 ponto na carteira
// Utilize o Math.floor() para arredondar os valores decimais mais próximos 
// Caso os pontos sejam maiores que 12 a carteira é suspendida 

verificarVelocidade(95);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const KmPorPonto = 5;

    if (velocidade <= velocidadeMaxima) {
        console.log('Ok');
    } else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / KmPorPonto));
        if(pontos >= 12){
            console.log('Carteira suspensa');
        }else{
            console.log('Pontos: ', pontos);
        }
    }
}
