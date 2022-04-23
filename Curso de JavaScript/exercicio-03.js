//FIZZBUZZ - aparece muito em entrevistas de emprego


// Se tivermos um valor divisível por 3, retornamos ( =>) Fizz
// Se tivermos um valor divisível por5 => Buzz
// Divisível por 3 e 5 => FizzBuzz
// Se não é divisível por 3 ou 5 => entrada
// Se não for número, retornamos que NaN

const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'Não é um número';
    if (entrada % 3 === 0 && entrada % 5 === 0) //Essa deve ser feita antes das outras
        return 'FizzBuzz'
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
    return entrada;
}






