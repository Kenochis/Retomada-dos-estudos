// Crie uma função que receba um array de notas e retorne uma média.

function calcularMedia(notas) {
    let soma = 0;

    for (const nota of notas) {
        soma += nota;
    };

    return soma / notas.length; // usar "length" para dividir pela quantidade de notas.
};

const media = calcularMedia([10, 4, 6, 9]);

console.log(media);