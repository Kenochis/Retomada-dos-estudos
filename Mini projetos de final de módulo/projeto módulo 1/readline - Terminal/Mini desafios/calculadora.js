// Calculadora no terminal.

const readline = require("readline"); // Importa o readline para permitir perguntas no terminal.

const rl = readline.createInterface({ // Cria a interface para entrada e saída de dados.
    input: process.stdin,
    output: process.stdout
});

// Função responsável por realizar o cálculo.
function calculo(num1, operador, num2) {
    let resultado;

    // Verifica qual operador foi escolhido.
    switch (operador) {
        case "+":
            resultado = num1 + num2;
            break;

        case "-":
            resultado = num1 - num2;
            break;

        case "*":
            resultado = num1 * num2;
            break;

        case "/":
            resultado = num1 / num2;
            break;

        default:
            return "Operação inválida!";
    }

    return resultado;
};

// Função que inicia ou reinicia a calculadora.
function iniciarCalculadora() {
    console.log("=== CALCULADORA NO TERMINAL ===");

    rl.question("Digite o primeiro número: ", (num1) => {
        num1 = Number(num1); // Converte a resposta de String para Number.

        rl.question("Digite o operador do cálculo (+, -, *, /): ", (operador) => {

            rl.question("Digite o segundo número: ", (num2) => {
                num2 = Number(num2);

                // Chama a função calculo() e mostra o resultado.
                console.log(`Resultado: ${calculo(num1, operador, num2)}`); 
                
                rl.question("Deseja fazer outro cálculo? (s/n): ", (resposta) => {

                    // toLowerCase() -> transforma a resposta em minúscula.
                    if(resposta.toLowerCase() === "s") { 
                        // Chama a função novamente para fazer outro cálculo.
                        iniciarCalculadora();

                    } else {
                        // Encerra o programa.
                        console.log("Programa encerrado..");
                        rl.close();
                    }

                });

            });

        });
                    
    });
};

// Inicia a calculadora pela primeira vez.
iniciarCalculadora();