/*
    if -> executa se for (true).
    else if -> testa outra condição.
    else -> executa se "if" for (false).
*/


// Verificar se idade é maior ou menor que 18 anos.
const idade = 17;

if (idade >= 18){
    console.log("Maior de idade!");
} else {
    console.log("Menor de idade!");
};

// Verificar o resultado da nota da prova.
const nota = 6;

if (nota >= 9){
    console.log("Nota Excelente. Aprovado!");
} else if (nota >= 7 && nota <= 8.9){
    console.log("Nota Regular. Aprovado!");
} else {
    console.log("Nota Baixa. Reprovado!");
};

// Verificar se a compra foi aprovado ou não.
const dinheiro = 120;
const preco = 90;

if (dinheiro >= 90 && preco <= 90){
    console.log("Compra aprovada!");
} else {
    console.log("Saldo insuficiente!");
};

// Verificar se o usuario e senha estão corretos para login.
const usuario = true;
const senha = true;

if (usuario && senha){
    console.log("Login realizado com sucesso!");
} else {
    console.log("Login inválido!");
};

// Verificar a condição da temperatura ambiente.
const temperatura = 22;

if (temperatura >= 25){
    console.log("Temperatura está quente!");
} else if (temperatura <= 24 && temperatura >= 15){
    console.log("Temperatura está agradável!");
} else if (temperatura <= 15 && temperatura >= 0){
    console.log("Temperatura está frio!");
} else {
    console.log("Temperatura está congelando!");
};

// Crie um sistema de desconto.
const valorDaCompra = 180;
const clienteVip = false;

if (valorDaCompra >= 150 && clienteVip){  // não precisa digitar (clienteVip === true). Ele já identifica a variável como true.
    console.log("Você ganhou 20% de desconto!");
} else if(valorDaCompra >= 150 && !clienteVip){ // ! = inverte o valor (true -> false). Ele irá verificar se a variável é false.
    console.log("Você ganhou 10% de desconto!");
} else {
    console.log("Você não tem desconto!");
};

// Quando for criar um "if", pergunte a si mesmo: Qual condição eu quero verificar?