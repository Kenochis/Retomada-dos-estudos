/*  Minha missão:

    1. Crie uma cópia do Array original.
    2. Organize os produtos do menor para o maior preço.
    3. Mostre os produtos ordenados.
    4. Organize uma cópia em ordem decrescente.
    5. Mostre os resultados.
    6. Confira se o Array original continua na ordem inicial.
*/

const produtos = [
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 80 },
    { nome: "Monitor", preco: 900 },
    { nome: "Headset", preco: 250 },
    { nome: "Webcam", preco: 180 }
];

let indexProdutos = 0;

for (let i = 0; i < produtos.length; i++) {
    indexProdutos++;
};

const produtosOrdemCrescente = produtos.slice(0, indexProdutos);

produtosOrdemCrescente.sort((a, b) => {
    return a - b;
});

console.log(produtosOrdemCrescente)

// Falta terminar...