// mostre quantas letras tem cada jogo.

const jogos = ["Minecraft", "Terraria", "Valorant", "The Last of Us"];

for (const jogo of jogos) {
    const quebra = jogo.replaceAll(" ", "").length; // replaceAll -> pega algo e muda por outro (ex: "a", "*").

    console.log(`${jogo} possui ${quebra} letras.`);
};