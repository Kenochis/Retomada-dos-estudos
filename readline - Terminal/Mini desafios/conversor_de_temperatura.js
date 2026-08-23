// Convertendo temperaturas no terminal.

const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculosDeConversão (termometricaParaConverter, valorDaTemperatura, termometricaParaReceberConversao) {
    const converter = termometricaParaConverter;
    const valor = valorDaTemperatura;
    const receber = termometricaParaReceberConversao;

    let resultado;

    if (converter === `Celsius (°C)` && receber === `Fahrenheit (°F)`) {
        resultado = (9 / 5 * valor) + 32;

    } else if (converter === `Celsius (°C)` && receber === `Kelvin (K)`) {
        resultado = valor + 273.15;

    } else if (converter === `Fahrenheit (°F)` && receber === `Celsius (°C)`) {
        resultado = 5 / 9 * (valor - 32);

    } else if (converter === `Fahrenheit (°F)` && receber === `Kelvin (K)`) {
        resultado = (5 / 9 * (valor - 32)) + 273.15;

    } else if (converter === `Kelvin (K)` && receber === `Celsius (°C)`) {
        resultado = valor - 273.15;

    } else if (converter === `Kelvin (K)` && receber === `Fahrenheit (°F)`) {
        resultado = (9 / 5 * (valor - 273.15)) + 32;
    }

    //retornar um console.log com o resultado e a escrita.
    return console.log(`
    ---------------------------------
    📊 RESULTADO DA CONVERSÃO:
    ---------------------------------
    🌡️  Dado enviado:   ${valor} ${converter}
    ✨ Valor convertido: ${resultado} ${receber}
    ---------------------------------`);
}

function iniciandoConversor () {
    const logoTipo = () => {
        // Limpa a tela do terminal para manter o visual organizado.
        console.clear();
        console.log(`<=== CONVERSOR DE TEMPERATURA NO TERMINAL ===>`);
    };

    const celsius = `Celsius (°C)`;
    const fahrenheit = `Fahrenheit (°F)`;
    const kelvin = `Kelvin (K)`;

    function fazerPergunta1 () {
        logoTipo();

        // Tudo em um único console.log usando crases (``).
        console.log(`Escolha uma escala termométrica que deseja converter:
        1 = ${celsius}
        2 = ${fahrenheit}
        3 = ${kelvin}`);

        rl.question(`Digite o número da opção: `, (opcao) => {
            // Validação estrita: se NÃO for `1`, `2` ou `3`.
            if (opcao !== `1` && opcao !== `2` && opcao !== `3`) {
                // Exibe uma mensagem de erro temporária antes de reiniciar.
                console.log(`Erro.. opção inválida!`);

                // Espera 2 segundos e faz a pergunta novamente.
                setTimeout(fazerPergunta1, 2000);
                return;
            }

            // Se passou da validação, segue o código abaixo.
            function pedirValor () {
                logoTipo();

                // Somente para uma informação.
                let tipoDeMedicao;

                // verifica a opção escolhida na pergunta anterior aqui, pois precisa limpar o terminal caso o usúario digite o número errado na próxima pergunta.
                if (opcao === `1`) {
                    console.log(`Você escolheu a opção ${celsius}.`);
                    tipoDeMedicao = celsius;
                } else if (opcao === `2`) {
                    console.log(`Você escolheu a opção ${fahrenheit}.`);
                    tipoDeMedicao = fahrenheit;
                } else if (opcao === `3`) {
                    console.log(`Você escolheu a opção ${kelvin}.`);
                    tipoDeMedicao = kelvin;
                }

                // perguntando o valor a ser convertido;
                rl.question(`Qual o valor da temperatura que será convertida? `, (valor) => {
                    const valorDaTemperatura = Number(valor.replace(",", "."));

                    // Se o resultado não for um número válido, ou se o usuário deu Enter em branco
                    if (isNaN(valorDaTemperatura) || valor.trim() === "") {
                    // Exibe uma mensagem de erro temporária antes de reiniciar.
                    console.log(`Erro.. número inválido!`);

                    // Espera 2 segundos e faz a pergunta novamente.
                    setTimeout(pedirValor, 2000);
                    return;
                    }

                    function fazerPergunta2() {
                        logoTipo();
                        let alternativas = [];

                        console.log(`Você escolheu ${valorDaTemperatura} ${tipoDeMedicao} para conversão.`);

                        if (opcao === `1`) {
                            console.log(`Escolha uma escala termométrica que deseja receber a conversão:
                        1 = ${fahrenheit}
                        2 = ${kelvin}`);
                        alternativas = [`${fahrenheit}`, `${kelvin}`];

                        } else if (opcao === `2`) {
                            console.log(`Escolha uma escala termométrica que deseja receber a conversão:
                        1 = ${celsius}
                        2 = ${kelvin}`);
                        alternativas = [`${celsius}`, `${kelvin}`];

                        } else if (opcao === `3`) {
                            console.log(`Escolha uma escala termométrica que deseja receber a conversão:
                        1 = ${celsius}
                        2 = ${fahrenheit}`);
                        alternativas = [`${celsius}`, `${fahrenheit}`];
                        }

                        rl.question(`Digite o número da opção: `, (opcao2) => {
                            // Validação estrita: se NÃO for `1` ou `2`.
                            if (opcao2 !== `1` && opcao2 !== `2`) {
                                // Exibe uma mensagem de erro temporária antes de reiniciar.
                                console.log(`Erro.. opção inválida!`);

                                // Espera 2 segundos e faz a pergunta novamente.
                                setTimeout(fazerPergunta2, 2000);
                                return;
                            }

                            // Se passou da validação, processa a escolha correta.
                            logoTipo();

                            if (opcao2 === `1`) {
                                console.log(`A conversão será de ${valorDaTemperatura} ${tipoDeMedicao} para ${alternativas[0]}.`);
                                calculosDeConversão(tipoDeMedicao, valorDaTemperatura, alternativas[0]);

                            } else if (opcao2 === `2`) {
                                console.log(`A conversão será de ${valorDaTemperatura} ${tipoDeMedicao} para ${alternativas[1]}.`);
                                calculosDeConversão(tipoDeMedicao, valorDaTemperatura, alternativas[1]);
                            } 

                            rl.question("Deseja converter outro valor?(s/n): ", (resposta) => {
                                if(resposta.toLowerCase() === "s") {
                                    iniciandoConversor();

                                } else {
                                    console.log(`Encerrando o conversor de temperatura...`);
                                    rl.close();
                                }

                            });
                        })
                    }
                    fazerPergunta2();
                })
            }
            pedirValor();
        })
    }
    fazerPergunta1();
}

iniciandoConversor();

// concluido >>>>>>