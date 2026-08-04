// Faça 2 perguntas seguidas de um número, e depois mostre a soma.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o primeiro número: ", (number1) => {
    number1 = Number(number1); // conversão de string para number.

    rl.question("Digite o segundo número: ", (number2) => {
        number2 = Number(number2);

        console.log(`A soma dos números é: ${number1 + number2}`);

        rl.close();
    });
    
});

