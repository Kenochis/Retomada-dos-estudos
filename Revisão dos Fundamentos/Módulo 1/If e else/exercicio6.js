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