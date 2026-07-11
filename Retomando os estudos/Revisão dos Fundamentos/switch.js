/*  O switch compara igualdade (===).
    Use switch quando você quer comparar uma variável com vários valores específicos.
*/

// Exercício 1:
const mes = 5;

switch (mes) {
    case 1:
        console.log("Mês de janeiro.");
        break;
    
    case 2:
        console.log("Mês de fevereiro.");
        break;

    case 3:
        console.log("Mês de março.");
        break;

    case 4:
        console.log("Mês de abril.");
        break;

    case 5:
        console.log("Mês de maio.");
        break; // O break significa: "Pare o switch aqui."
    
    default: // Se nenhum "case" for verdadeiro, ele executa o "default".
        console.log("Mês inválido.");
        break;
};

// Exercício 2:
const dificuldade = "difícil";

switch (dificuldade) {
    case "fácil":
        console.log("Nível de dificuldade: Fácil.");
        break;

    case "normal":
        console.log("Nível de dificuldade: Normal.");
        break;

    case "difícil":
        console.log("Nível de dificuldade: Difícil.");
        break;

    default:
        console.log("Opção inválida.");
        break;
};

// Exercício 3:
const menu = 3;

switch (menu) {
    case 1:
        console.log("Novo jogo");
        break;

    case 2:
        console.log("Continuar");
        break;

    case 3:
        console.log("Configurações");
        break;

    case 4:
        console.log("Créditos");
        break;

    case 5:
        console.log("Sair");
        break;

    default:
        console.log("Opção inválida.");
        break;
};

// Crie um sistema de notas por letras.
const nota = "C";

switch (nota) {
    case "A":
        console.log("Excelente.");
        break;

    case "B":
        console.log("Muito bom.");
        break;

    case "C":
        console.log("Bom.");
        break;

    case "D":
        console.log("Abaixo da média.");
        break;

    case "E":
        console.log("Recuperação.");
        break;

    default:
        console.log("Reprovado");
        break;
};