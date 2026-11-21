/*  Minha missão:

    1. Crie um Array contendo apenas pessoas maiores de idade.
    2. Crie outro Array contendo apenas pessoas com 25 anos ou mais.
    3. Mostre os dois resultados.
*/

const idades = [15, 22, 17, 30, 14, 25, 19, 40];

const maiorDeIdade = idades.filter((idade) => {
    if (idade >= 18) {
        return idade;
    }
});

const acimaDos25 = idades.filter((idade) => {
    if (idade >= 25) {
        return idade;
    }
});

console.log(maiorDeIdade);
console.log(acimaDos25);

// Concluido