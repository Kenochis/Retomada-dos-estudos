/*  Minha missão:

    Faça um programa que percorra o Array e mostre cada número no console.
*/

const numeros = [4, 10, 32, 7, 26, 19];

for (const num of numeros) {
    console.log(num);    
}

console.log("-----------------");

for (let i = 0; i < numeros.length; i++) {
    const num = numeros[i];

    console.log(num);
}

// Concluido