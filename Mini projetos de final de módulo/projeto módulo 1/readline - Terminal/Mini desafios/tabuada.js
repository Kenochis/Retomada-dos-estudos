// Tabuada no Terminal.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculoTabuada(number) {
    for (let i = 1; i <= 10; i++) {
        let resultado = i * number;

        console.log(`${number} X ${i} = ${resultado}`);
    }
};

function iniciarTabuada() {
    console.log("=== TABUADA NO TERMINAL ===");
    
    rl.question("Digite o número da tabuada que você gostaria de saber: ", (numero) => {
        console.log(`--->Tabela do número ${numero}<---`);
        calculoTabuada(numero);

        rl.question("Gostaria de olhar outra tabela?(s/n): ", (resposta) => {
            if(resposta.toLowerCase() === "s") {
                iniciarTabuada();
            } else {
                console.log("Encerrando programa..");
                rl.close();
            }
                
        });

    });

};

iniciarTabuada();