// Mostre quantas letras possui cada jogo.

const jogos = ["Minecraft", "Terraria", "Valorant", "CS2", "League of Legends"];

for (let i = 0; i < jogos.length; i++) {
    const quebra = jogos[i].split(""); //split() → quebra uma string em um array.

    console.log(`O jogo "${jogos[i]}" possui ${quebra.length} letras`);
};