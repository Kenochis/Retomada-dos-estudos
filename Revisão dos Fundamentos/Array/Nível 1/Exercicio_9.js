/*  missão:

    Calcule a média das notas e mostre o resultado.
*/

const notas = [8, 7, 9, 6, 10];

let soma = 0;

for (const nota of notas) {
    soma += nota;
}

const media = soma / notas.length;

console.log(media);

// Concluido