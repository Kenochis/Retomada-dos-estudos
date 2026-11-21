/*  Minha missão:

    1. Verifique se todas as notas são maiores ou iguais a 6.
    2. Verifique se todas as notas são maiores ou iguais a 7.
    3. Mostre os resultados.
*/

const notas = [7, 8, 9, 6, 10];

const notasMaiorOuIgual6 = notas.every((nota) => { // Verificando se todas as notas são maior ou igual a 6.
    if (nota >= 6) {
        return nota;
    }
});

console.log(`Todas as notas são maior ou igual a 6: ${notasMaiorOuIgual6}`);

//----------------------------//

const notasMaiorOuIgual7 = notas.every((nota) => { // Verificando se todas as notas são maior ou igual a 7.
    if (nota >= 7) {
        return nota;
    }
});

console.log(`Todas as notas são maior ou igual a 7: ${notasMaiorOuIgual7}`);

// Concluido