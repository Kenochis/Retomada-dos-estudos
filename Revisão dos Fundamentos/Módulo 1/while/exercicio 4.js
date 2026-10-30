// Some os números do array.

const numeros = [5, 10, 15, 20];
let soma = 0;

let i = 0;

while (i < numeros.length) {
    soma += numeros[i];
    i++;
};

console.log(`valor total da soma é: ${soma}`);