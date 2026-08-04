/*
Quanto sobra depois da compra?
O dinheiro é suficiente para comprar?
O preço é igual a 90?
O preço é diferente de 100?
Adicione 50 ao dinheiro usando +=.
Subtraia 20 usando -=.
Descubra se dinheiro é maior e preco é menor que 100.
Descubra se dinheiro é maior que 200 ou preco é menor que 100.
*/

let dinheiro = 150;
let preco = 90;

// Quanto sobra depois da compra?
console.log(dinheiro - preco);

// O dinheiro é suficiente para comprar?
console.log(dinheiro >= preco);

// O preço é igual a 90?
console.log(preco === 90);

// O preço é diferente de 100?
console.log(preco !== 100);

// Adicione 50 ao dinheiro.
dinheiro += 50;
console.log(dinheiro);

// Subtraia 20 do dinheiro.
dinheiro -= 20;
console.log(dinheiro);

// Descubra se o dinheiro é maior e o preço é menor que 100.
console.log(dinheiro > 100 && preco < 100);

// Descubra se o dinheiro é maior que 200 ou o preço é menor que 100.
console.log(dinheiro > 200 || preco < 100);