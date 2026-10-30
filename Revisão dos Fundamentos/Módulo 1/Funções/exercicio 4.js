// Crie uma função que receba uma idade, e de acordo com a idade retorne algo.

function identidade(idade) {
    if (idade >= 18) {
        return "Maior de idade!";
    } else {
        return "Menor de idade!";
    };
};

console.log(identidade(17));