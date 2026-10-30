/*  Minha missão:

    1. Descubra o índice da primeira ocorrência de "JavaScript".
    2. Descubra o índice de "C#".
    3. Verifique o índice de "PHP".
    4. Mostre os três resultados no console.
*/

const linguagens = ["Python", "JavaScript", "Java", "C#", "JavaScript"];

console.log(`O índice da primeira ocorrência de "JavaScript": ${linguagens.indexOf("JavaScript")}`);
console.log(`O índice de "C#": ${linguagens.indexOf("C#")}`);
console.log(`O índice de "PHP": ${linguagens.indexOf("PHP")}`);

/*  O método indexOf() procura um elemento dentro de um Array e retorna o índice da primeira ocorrência encontrada.

        - Se encontrar o elemento, retorna seu índice.
        - Se não encontrar, retorna -1.
        - Se houver elementos repetidos, retorna o índice da primeira ocorrência.

    >> Atenção << : indexOf() não retorna true ou false. Ele retorna um índice ou -1.
*/

// Concluido