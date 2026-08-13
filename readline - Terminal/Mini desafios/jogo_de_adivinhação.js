// Criar um jogo de adivinhação de número.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function randomNumber() {
    const min = 1;
    const max = 100;

    //gerar um número aleatório de 1 a 100.
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function verificarDicas(chute, numAleatorio) {
    if(chute > numAleatorio) {
        return console.log(`Seu chute precisa ser mais baixo!`);
    } else {
        return console.log(`Seu chute precisa ser mais alto!`);
    }
};

function iniciarJogo() {
    let vidas = 10;
    let numero = randomNumber();
    let totalChutes = 0;

    console.log("===> JOGO DE ADIVINHAÇÃO DE NÚMERO <===");
    rl.question("Antes de começar, qual seria seu nick? ", (nick) => {
        console.log(`Vamos lá então, ${nick}. Vou te explicar às regras do jogo:`);
        console.log(`Você tem apenas ${vidas} vidas. Cada vida equivale a 1 tentativa de número. Se chegar a 0 vidas, o jogo encerra e você perde!`);
        console.log(`Você terá dicas sobre cada tentativa (exemplo: mais baixo ou mais alto).`);
        console.log("<===========================================>");

        function tentativasDeChute(vidas, num, tentativas) {
            console.log(`Total de vidas: ${vidas}`)

            if(vidas !== 0) { //Verifica se as vidas já acabaram, antes de continuar.
                rl.question(`Digite um número: `, (chute) => {
                    chute = Number(chute);
                
                    if(chute !== num) {
                        vidas--
                        tentativas++

                        verificarDicas(chute, num);
                        tentativasDeChute(vidas, num, tentativas);

                    } else {
                        console.log(`====> !!!PARABÉNS, VOCÊ CONSEGUIU ADIVINHAR O NÚMERO SECRETO E GANHOU O JOGO!!! <====`);
                        console.log(`Total de chutes: ${tentativas}`);
                        console.log(`Número secreto era: ${num}`)
                    
                        rl.question("Deseja jogar novamente?(s/n): ", (resposta) => {
                            if(resposta.toLowerCase() === "s") {
                                iniciarJogo();
                            } else {
                                console.log(`Obrigado por jogar. Encerrando o gamer...`);
                                rl.close();
                            }

                        });

                    }

                });

            } else {
                console.log(`====> SUAS VIDAS ACABARAM E VOCÊ PERDEU O JOGO! <====`);
                rl.question("Deseja jogar novamente?(s/n): ", (resposta) => {
                    if(resposta.toLowerCase() === "s") {
                        iniciarJogo();
                    } else {
                        console.log(`Obrigado por jogar. Encerrando o gamer...`);
                        rl.close();
                    }
                });
            }

        };
        tentativasDeChute(vidas, numero, totalChutes);

    });

};

iniciarJogo();