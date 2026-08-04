// Peça pra digitar um número, e mostre o número digitado.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", (number) => {
    console.log(number);

    rl.close();
});