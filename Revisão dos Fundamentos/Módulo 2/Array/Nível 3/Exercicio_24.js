/*  Minha missão:

    1. Organize os números em ordem crescente.
    2. Mostre o resultado.
    3. Organize os números em ordem decrescente.
    4. Mostre o resultado novamente.
*/

const numeros = [45, 3, 100, 12, 8, 67, 1, 30];

numeros.sort((a, b) => {
    return a - b;
});

console.log(numeros);

console.log("-----------------------");

numeros.sort((a, b) => {
    return b - a;
});

console.log(numeros);

/*  
    1. Se o resultado for negativo, "a" fica antes de "b".
    2. Se o resultado for positivo, "b" fica antes de "a".
    3. Se o resultado for zero, os valores são considerados iguais para fins de ordenação.
*/

// Concluido