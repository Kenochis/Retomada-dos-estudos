/*  Minha missão:

    1: utilize filter() para criar um Array contendo apenas os produtos com preço inferior a 300.
    2: utilize map() para criar um novo Array contendo apenas os nomes desses produtos.
    3: mostre os resultados no console.
*/

const produtos = [
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 80 },
    { nome: "Monitor", preco: 900 },
    { nome: "Headset", preco: 250 },
    { nome: "Webcam", preco: 180 },
    { nome: "Notebook", preco: 3500 }
];

const inferiorATrezentos = produtos.filter((produto) => {
    return produto.preco < 300;
});

const nomeDosSelecionados = inferiorATrezentos.map((produtoSelecionado) => {
    return produtoSelecionado.nome;
});

console.log(inferiorATrezentos);
console.log(nomeDosSelecionados);

// Concluido