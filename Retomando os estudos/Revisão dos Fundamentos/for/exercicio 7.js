/*  Mostre todos os números de 1 a 30.
    Porém, se o número for múltiplo de 3, escreva "fizz".
*/

for (let i = 1; i <= 30; i++) {
    const dividivel = i % 3 === 0; // % -> resto da divisão.

    if (dividivel) {
        console.log("fizz")
    } else {
        console.log(i)
    }
};