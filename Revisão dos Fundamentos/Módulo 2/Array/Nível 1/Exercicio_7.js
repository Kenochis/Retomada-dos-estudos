/*  Minha missão:

    Crie um programa que encontre o maior número do Array.
*/

const numeros = [12, 45, 7, 89, 23, 56, 3];

let numMaior = 0;

for (const num of numeros) {
    if (num > numMaior) {
        numMaior = num;
    }
}

console.log(numMaior);

// Concluido