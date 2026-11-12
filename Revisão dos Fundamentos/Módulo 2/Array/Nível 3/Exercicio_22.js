/*  Minha missão:

    1. Verifique se existe alguma nota maior ou igual a 9.
    2. Verifique se existe alguma nota igual a 10.
    3. Mostre os resultados no console.
*/

const notas = [4, 6, 8, 5, 9, 3];

const verificandoNotas = notas.some((nota) => {
    return nota >= 9;
});

console.log(`Existe algumna nota que seja maior ou igual a 9: ${verificandoNotas}`);
//-------------------------//

const verificandoNotas2 = notas.some((nota) => {
    return nota === 10;
});

console.log(`Existe algumna nota que seja igual a 10: ${verificandoNotas2}`);

// Concluido