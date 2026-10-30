/*  
    O switch compara igualdade (===).
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