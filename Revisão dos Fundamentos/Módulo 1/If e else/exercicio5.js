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