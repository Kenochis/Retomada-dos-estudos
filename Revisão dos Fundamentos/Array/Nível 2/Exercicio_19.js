/*  missão:

    1. Crie um novo Array contendo apenas os números maiores que 20.
    2. Crie outro Array contendo apenas os números pares.
    3. Mostre os dois resultados.
*/

const numeros = [4, 15, 22, 8, 31, 40, 13, 50, 7];


const numAcimaDeVinte = numeros.filter((numero) => {
    return numero > 20;
});

const numPares = numeros.filter((numero) => {
    return (numero % 2) === 0;
});

const imparMenorQueVinte = numeros.filter((numero) => {
    return (numero < 20) && ((numero % 2) === 1);
});

console.log(numAcimaDeVinte);

console.log(numPares);

console.log(imparMenorQueVinte);

/*  Você pode diminuir um código de métodos imutáveis, caso tenha apenas um retorno.

    exemplo: -> const numAcimaDeVinte = numeros.filter(numero => numero > 20);

    1. Não precisa das chaves {}.
    2. Não precisa do return.
    3. Não precisa dos parênteses () no elemento.
*/

// Concluido