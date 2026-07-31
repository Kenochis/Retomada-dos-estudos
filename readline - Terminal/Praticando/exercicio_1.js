/*  Faça um programa que pergunte:
        "Qual é o seu nome?"

    Depois mostre:
        "Olá Kauã!"
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Qual é o seu nome, jovem guerreiro? ", (nome) => {
    console.log(`Você é patético, ${nome}!`);

    rl.close();
});

// Funcionou>>>>>>>>>>>