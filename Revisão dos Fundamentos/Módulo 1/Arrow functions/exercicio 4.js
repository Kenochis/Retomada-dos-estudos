const calcularMedia = notas => {
    let soma = 0;

    for (const nota of notas) {
        soma += nota;
    }

    return soma / notas.length;
};

const media = calcularMedia([10, 5, 8, 2]);

console.log(media);