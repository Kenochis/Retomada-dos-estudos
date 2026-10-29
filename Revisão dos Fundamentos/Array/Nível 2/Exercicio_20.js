/*  Minha missão:

    1. Encontre o produto chamado "Monitor".
    2. Mostre o nome e o preço desse produto.
    3. Tente encontrar um produto chamado "Notebook".
    4. Verifique o que acontece quando o produto não existe.
*/

const produtos = [
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 80 },
    { nome: "Monitor", preco: 900 },
    { nome: "Headset", preco: 250 },
    { nome: "Webcam", preco: 180 }
];

const monitor = produtos.find((produto) => {
    return produto.nome === "Monitor";
});

const notebook = produtos.find((produto) => {
    return produto.nome === "Notebook";
});

console.log(monitor);
console.log(notebook); // Produto não existe, então dá undefined.

// Concluido