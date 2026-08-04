// calcule a média do array.

const numeros = [10, 20, 30, 40];
let somaTotal = 0

for (let i = 0; i < numeros.length; i++) {
    somaTotal += numeros[i];
};

const media = somaTotal / numeros.length;
console.log(media);