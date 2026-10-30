// sistema de notas no terminal.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Inicia o programa.
function iniciarSistemaDeNotas () {
    // Mantendo interface do terminal sempre limpa e com Título.
    const logoTipo = () => {
        console.clear();
        console.log(`<<<=== SISTEMA DE NOTAS NO TERMINAL ===>>>`);
    };

    // Variável onde guarda as notas.
    let arrayNotas = [];

    logoTipo();
    console.log(`
        Seja muito bem-vindo ao sistema que cálcula a média de notas.
        Aqui você vai precisar inserir no mínimo 3 notas para fazer o cálculo da média.
        Você pode inserir outras notas caso queira, mas antes de pedir a média.
    `);

    // Realiza o cálculo da média de todas as notas.
    function mediaDeNotas (notas) {
        let somaDeNotas = 0;

        for (let i = 0; i < notas.length; i++) {
            const nota = notas[i];
            somaDeNotas += nota;
        }

        return somaDeNotas / notas.length;
    };

    // Serve para mostrar notas e média.
    function mostrarMedia () {
        logoTipo();

        // .toFixed(2) arredonda baseado nas regras matemáticas.
        const media = mediaDeNotas(arrayNotas).toFixed(2);
        let number = 1;

        console.log(`Notas utilizadas para a média: `);

        for (let i = 0; i < arrayNotas.length; i++) {
            
            console.log(`Nota ${number}: ${arrayNotas[i]}`);

            number++;
        }

        console.log(`A média de todas as suas notas é: ${media}`);
    };

    // Serve para verificar as notas que receber do usuário.
    function verificarNota (notaAtual) {

        // Substitui a "," por ".", para o código entender que é um número quebrado.
        const nota = Number(notaAtual.replace(",", "."));

        //Se não for um número válido ou o usuário der enter com espaço vazio.
        if (isNaN(nota) || notaAtual.trim() === "") {
            // mensagem de erro se não for um número ou estiver vazio.
            console.log(`Erro... Número digitado é inválido!`);

            // Espera 2 segundos, antes de reiniciar a pergunta dentro do array function.
            setTimeout(() => {
                rl.question("Digite aqui a sua nota: ", (notas) => {
                    verificarNota(notas);
                });
            }, 2000); /* <<< local onde tá dando um erro de layout >>> */
            return;
        }

        // Se o número for válido, segue o código.
        arrayNotas.push(nota);

        logoTipo();
        console.log(`Sua nota digitada foi: ${nota}`);
    };

    // Serve para verificar se o usuário gostaria de acrescentar mais notas.
    function adicionarOutraNota () {
        rl.question("Gostaria de digitar outra nota?(s/n): ", (resposta) => {

            if (resposta.toLowerCase() === "s") {
                logoTipo();

                rl.question("Digite aqui a sua nota: ", (notasX) => {

                    verificarNota(notasX);
                    adicionarOutraNota();
                });

            } else {
                mostrarMedia();
                
                rl.question("Gostaria de usar o sistema de notas novamente?(s/n)", (respostaFinal) => {

                    if (respostaFinal.toLowerCase() === "s") {
                        iniciarSistemaDeNotas();

                    } else {
                        logoTipo();

                        console.log(`Obrigado por usar o sistema de média de notas.`);
                        console.log(`Encerrando o programa...`);
                        
                        rl.close();
                        // falta mostrar todas as notas que foi digitada..
                    }
                });
            }
        });
    };

    rl.question("Vamos começar?(s/n): ", (respostaInicial) => {
        if (respostaInicial.toLowerCase() === "s") {
            logoTipo();

            rl.question("Digite aqui a sua nota: ", (notas1) => {
                verificarNota(notas1);

                rl.question("Digite aqui a sua nota: ", (notas2) => {
                    verificarNota(notas2);

                    rl.question("Digite aqui a sua nota: ", (notas3) => {
                        verificarNota(notas3);

                        adicionarOutraNota();
                    });
                });
            });

        } else {

            console.log(`Obrigado por usar o sistema de média de notas.`);
            console.log(`Encerrando o programa...`);
            
            rl.close();
        }
    });
};
iniciarSistemaDeNotas();

// concluido, porém com pequenos erros de layout ainda ocorrendo.