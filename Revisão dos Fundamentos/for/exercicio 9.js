// Conte quantos números existem no array, sem usar "array.length" para responder.

const notas = [9, 2, 4, 7];
let contagem = 0;

for (let i = 0; i < notas.length; i++) {
    contagem++
};

console.log(`Existem ${contagem} notas no array.`);