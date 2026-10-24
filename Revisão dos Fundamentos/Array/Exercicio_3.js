/*  Minha missão:

    1. Remova o último elemento.
    2. Mostre o Array atualizado.
    3. Mostre quantos elementos sobraram.
*/

let compras = ["Feijão", "Carne", "Mingau", "Brócolis", "Pão"];

compras.pop();

for (const itens of compras) {
    console.log(itens);  
}

console.log(compras.length);

//Concluido