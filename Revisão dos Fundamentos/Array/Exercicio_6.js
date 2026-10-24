/*  Minha missão:

    Percorra o Array e mostre somente os números pares.
*/

const numeros = [3, 8, 12, 7, 15, 20, 9, 4];

for (const num of numeros) {
    if (num % 2 === 0) {
        console.log(num);
    } 
}

console.log("---------------------");

for (let i = 0; i < numeros.length; i++) {
    const number = numeros[i];
    
    if (number % 2 === 0) {
        console.log(number);
    }
}

// Concluido