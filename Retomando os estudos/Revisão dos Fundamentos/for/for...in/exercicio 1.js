// Mostre apenas os índices usando for...in.

const frutas = ["Maçã", "Banana", "Uva"];

for (const i in frutas) {
    console.log(i);
};

// para conseguir a chave/indice: console.log(i);
// para conseguir o valor: console.log(frutas[i]);
// Como o "i" é o indice. Você apenas precisa chamar a variável "frutas" junto com a chave/indice, que é a posição "frutas[i]".