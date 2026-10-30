/*  Minha missão:

    1. Crie um novo Array contendo [20, 30, 40].
    2. Crie outro Array contendo [50, 60, 70].
    3. Mostre os dois novos Arrays.
    4. Mostre o Array original para confirmar que ele não foi alterado.
*/

const numeros = [10, 20, 30, 40, 50, 60, 70];


const primeirosSelecionados = numeros.slice(1, 4);
console.log(primeirosSelecionados);

const segundosSelecionados = numeros.slice(4, 7);
console.log(segundosSelecionados);


console.log(numeros);

/*  frutas.slice(1, 4);

        --> 1: índice inicial, incluído no resultado.
        --> 4: índice final, excluído do resultado.   

    Portanto, o método copia os elementos dos índices 1, 2 e 3.

    >> Regra importante << : o slice() não modifica o Array original.

*/

// Concluido