/*  Minha missão:

    1. Crie um novo Array com todos os nomes em letras maiúsculas.
    2. Mostre os nomes originais.
    3. Mostre os nomes modificados.
*/

const funcionarios = [
    "Carlos",
    "Ana",
    "Pedro",
    "Mariana",
    "João"
];

const nomesEmMaiusculo = funcionarios.map((funcionario) => {
    return funcionario.toUpperCase();
});

console.log(funcionarios);
console.log("-----------------------------------------------")
console.log(nomesEmMaiusculo);

// Concluido