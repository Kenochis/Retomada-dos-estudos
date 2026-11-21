/*  Minha missão: 

    1. Verifique se existe algum produto sem estoque.
    2. Verifique se existe algum produto com mais de 20 unidades.
    3. Mostre os resultados.
*/

const produtos = [
    { nome: "Teclado", estoque: 10 },
    { nome: "Mouse", estoque: 0 },
    { nome: "Monitor", estoque: 5 },
    { nome: "Headset", estoque: 0 }
];

const existeProdutoSemEstoque = produtos.some((produto) => {
    if (produto.estoque === 0) {
        return produto;
    }
});

console.log(`Existe produto sem estoque: ${existeProdutoSemEstoque}`);

//---------------------//

const existeProdutoComMaisDe20Estoque = produtos.some((produto) => {
    if (produto > 20) {
        return produto;
    }
});

console.log(`Existe produto com mais de 20 unidades: ${existeProdutoComMaisDe20Estoque}`);

// Concluido