function firstFunction() {
    this.name = 'Roberto';
}

/*
- Se coloco um new (construtor), vira um objeto e ai posso
colocar um this.
- Não posso fazer isso com Arrow Functions
- A Arrow function usa o contexto (this) de onde ela foi criada
- A função normal cria seu próprio contexto (this)
*/

const secondFunction = () => {

};


// arguments - posso passar varias propriedades na minha função

const soma = () => (
    algumNumero >= 10
        ? 'Maior'
        : 'Menor'
);

console.log(soma());



