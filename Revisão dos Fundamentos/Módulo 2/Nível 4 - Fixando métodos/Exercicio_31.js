/*  Minha missão:

    1. Selecione os produtos que custam menos de R$ 300.
    2. Crie um novo Array contendo somente os nomes desses produtos.
    3. Mostre os resultados.
*/

const produtos = [
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 80 },
    { nome: "Monitor", preco: 900 },
    { nome: "Headset", preco: 250 },
    { nome: "Webcam", preco: 180 }
];

const produtosAbaixoDe300 = produtos.filter((produto) => { // Filtrando produtos com preço abaixo de R$300.
    return produto.preco < 300;
});

const nomesDosProdutosSelecionados = produtosAbaixoDe300.map((produtoSelecionado) => { // Criando um novo array apenas com os nomes dos produtos filtrados.
    return produtoSelecionado.nome;
});

console.log(produtosAbaixoDe300);
console.log(nomesDosProdutosSelecionados);

// Concluido