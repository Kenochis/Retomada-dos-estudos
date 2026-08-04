// mostre o conteúdo do array, mas com numeração de contagem de cada item.

const jogos = ["Minecraft", "Terraria", "Valorant", "CS2"];
let number = 1;

for (let i = 0; i < jogos.length; i++) {
    console.log(`${number} - ${jogos[i]}`);
    number++
};