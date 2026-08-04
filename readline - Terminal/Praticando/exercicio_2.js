// Faça um programa que pergunte sua idade e mostre no terminal.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual sua idade? ", (idade) => {
    console.log(`Você tem ${idade} anos.`);

    rl.close();
});