// Mostre os números de 1 a 10.
for (let i = 1; i <= 10; i++) {
    //console.log(i);
};

// Mostre os números de 10 a 1.
for (let i = 10; i >= 1; i--) {
    //console.log(i);
};

// Mostre apenas os números pares de 0 a 20.
for (let i = 0; i <= 20; i += 2) {
    //console.log(i);
};

// Tabuada do número 9.
for (let i = 1; i <= 10; i++) {
    const number = 9;
    //console.log(`${number} x ${i} = ${number * i}`);
};

// Mostre o contéudo do array.
const frutas = ["Maça", "Banana", "Perá", "Laranja"];

for (let i = 0; i < frutas.length; i++) {
    //console.log(frutas[i]);
};

// Use for para somar todas as notas e mostrar o resultado.
const notas = [8, 10, 4, 7, 9];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
};

console.log(`Soma final das notas: ${soma}`);

/*  Antes de usar o "for", pense nessas 3 perguntas:
    1. Onde começa?
    2. Até quando repete?
    3. Como muda a cada volta?
*/