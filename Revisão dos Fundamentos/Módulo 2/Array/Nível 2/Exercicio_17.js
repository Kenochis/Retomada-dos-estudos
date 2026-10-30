/*  Minha missão:

    1. Percorra o Array utilizando forEach().
    2. Mostre cada nome no console.
    3. Mostre cada nome acompanhado da frase "Seja bem-vindo(a),".
*/

const nomes = ["Carlos", "Mariana", "João", "Fernanda"];

nomes.forEach((nome) => {
    console.log(`Nome: ${nome}`);
    console.log(`Posição index: ${nomes.indexOf(nome)}`);
    console.log(`Seja bem-vindo(a), ${nome}.`);

    console.log("----------------------");
});

// Concluido