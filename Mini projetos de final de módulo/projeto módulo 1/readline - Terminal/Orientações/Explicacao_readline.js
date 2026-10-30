/*  LENDO DADOS PELO TERMINAL:

1. Importar o módulo readline.
    */const readline = require("readline");/*

    - O readline é uma ferramenta do Node.js.
    - Ele permite que o usuário digite informações pelo terminal.


2. Criar a interface de comunicação.
    */const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });/*

    - input: recebe o que o usuário digita.
    - output: mostra mensagens no terminal.


3. Fazer uma pergunta.
    */rl.question("Qual é o seu nome? ", (nome) => {

    });/*

    - O programa faz uma pergunta.
    - Ele espera o usuário digitar.
    - O que foi digitado fica armazenado na variável "nome".


Exemplo:

    -Terminal- : Qual é o seu nome?
    -Usuário- : Kauã

    A variável fica assim:
        */nome = "Kauã"/*
    

4. Usar a resposta.

    */console.log(`Olá, ${nome}!`);/*

    Mostra:
        -Terminal- : Olá, Kauã!


5. Fechar a comunicação.

    */rl.close();/*

    - Encerra o programa.
    - Sempre use quando terminar de fazer as perguntas.
*/