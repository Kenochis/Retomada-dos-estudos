// Mostrar apenas os nomes que possui 4 letras.

const palavras = ["JavaScript", "HTML", "CSS", "Node"];

for (const palavra of palavras) {
    const letras = palavra.replaceAll(" ", "").length;

    if (letras === 4) {
        console.log(palavra);
    };
};

/*  Pense assim:
        1. for → "Vou percorrer as posições do array."
        2. for...of → "Vou percorrer os valores do array."
*/