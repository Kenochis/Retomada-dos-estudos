/*  Minha missão:

    Crie um programa que conte quantas notas são maiores ou iguais a 7.
*/

const notas = [10, 7, 5, 9, 4, 8, 6, 10, 3, 7];

let contador = 0;

for (const nota of notas) {
    if (nota >= 7) {
        contador++;
    }
}

console.log(`Total de notas maior ou igual a 7: (${contador})`);

//Concluido