/*  Minha missão:

    1. Crie um novo Array com todos os preços acrescidos de 10%.
    2. Mostre o Array original.
    3. Mostre o novo Array.
*/

const precos = [10, 25, 50, 100, 200];

const aumentoDePreco = precos.map((preco) => {
    const acrecimo = (preco / 100) * 10;

    return preco + acrecimo;
});

console.log(`Preços originais: [${precos.join(", ")}]`);

console.log(`Preços com acréscimo de 10%: [${aumentoDePreco.join(", ")}]`);

/*  
    Código       |     Separador
  ---------------|------------------
  .join(", ")    | Vírgula e espaço.
  .join(" ")     | Espaço.
  .join("\n")    | Quebra de linha.

*/

// Concluido