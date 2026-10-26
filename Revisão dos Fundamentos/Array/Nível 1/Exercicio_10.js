/*  Minha missão é executar as seguintes operações:

    Parte 1 — Exibir os produtos.

    Parte 2 — Adicionar produtos.

        Adicione os seguintes produtos:
            - "Headset"
            - "Webcam"

    Parte 3 — Remover o último produto adicionado.

    Parte 4 — Mostrar o resultado

        Exiba:
            1. A lista atualizada.
            2. A quantidade de produtos.
            3. O primeiro produto.
            4. O último produto.
*/

const produtos = ["Teclado", "Mouse", "Monitor"];

produtos.push("Headset", "Webcam");
produtos.pop();

//-------------------//
for (const produto of produtos) {
    console.log(produto);
}

console.log(`Quantidade de produtos: ${produtos.length}`);
console.log(`Primeiro item: ${produtos[0]}`);
console.log(`Último item: ${produtos[produtos.length - 1]}`);

// Concluido