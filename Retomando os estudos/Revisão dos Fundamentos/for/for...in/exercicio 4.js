// mostre a chave e o valor junto.

const pessoa = {
    nome: "Kauã",
    idade: 20,
    profissao: "Desenvolvedor"
};

for (const chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
};

/*  Na prática, a ordem costuma ser esta:

        1. for...of → para percorrer arrays.
        2. for → quando precisa do índice.
        3. for...in → para percorrer objetos.
        4. while → quando não se sabe quantas vezes a repetição vai acontecer.

    Então, guarde esta regra simples:
        1. of → valores.
        2. in → chaves (ou índices).
*/