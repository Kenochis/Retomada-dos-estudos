let nome = "Kauã"; 
let idade = 20;
let altura = 1.76;
let estudando = true;
let jogos = ["The Last of Us part I", "Horizon Forbidden West", "Ghost of Tsushima"];
let pc = {
    processador: "AMD Ryzen 7 9800X3D",
    memoriaInterna: "4 TB",
    memoriaRam: "64 GB",
    placaDeVideo: "NVIDIA GeForce RTX 4090"
};

// typeof -> É um método para verificar o tipo de cada variável.

console.log(typeof nome); 
console.log(typeof idade); 
console.log(typeof altura);
console.log(typeof estudando);
console.log(typeof jogos); // Aqui o sistema não entende que é um array, por isso usamos outro método.
console.log(typeof pc);

// Array.isArray([]) -> É um método para verificar se a váriavel é um Array.

console.log(Array.isArray(jogos)); 

// Diferença entre undefined e null.

let nada;
let vazio = null;

console.log(nada); // undefined -> Ainda não recebeu um valor!
console.log(vazio); // null -> Foi definido como vazio.