const array = [
    {product: 'Iphone', price: 5000, quantity: 2},
    {product: 'Macbook', price: 20000, quantity: 1},
    {product: 'Magic Mouse', price: 100, quantity: 5},
];


// .find - retorna o obeto
const find = array.find((product) => product.price > 1000);


// findIndex - retorna o index 
const findIndex = array.findIndex((product) => product.name === 'Iphone' > 1000);


// .some - verificar se algum elemente bate com a condição
const some = array.some((product) => product.price <  1000 );
console.log({ some });


// every - verifica se todos os produtos cumprem nossa condição
const every = array.some((product) => product.price <  1000 );


// .map - passa pelo nosso array e cria um novo array com nossa alteração
const map = array.map((product) => ({
    // Calcular o subtotal dos produtos
        ...product, // Usando o spread 
        subtotal: product.quantity * product.price,
}));
console.log({ map });


// .filter - Podemos filter e efetuar alguma operação e também cria um novo array
const filter = array.filter((product) => product.quantity > 1000);


// .reduce - Não recebe o produto, mas dois argumentos
const reduce = array.reduce((accumulator, product) => {
    // Imagine que quero somar o total dos valores * quantidade dos meus produtos
    return accumulator + (product.price * product.quantity);
}, 0);

console.log({ reduce });


