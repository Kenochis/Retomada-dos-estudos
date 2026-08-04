// Use for para somar todas as notas e mostrar o resultado.
const notas = [8, 10, 4, 7, 9];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
};

console.log(`Soma final das notas: ${soma}`);