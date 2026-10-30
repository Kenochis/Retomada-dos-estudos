// outro método mais simples de fazer:

const jogos = ["Minecraft", "Terraria", "Valorant", "CS2", "League of Legends"];

for (let i = 0; i < jogos.length; i++) {
    const jogo = jogos[i];
    const semEspacos = jogo.replaceAll(" ", "");

    console.log(`O jogo "${jogo}" possui ${semEspacos.length} letras`);
};

/*  const texto = "Ana Maria";
    console.log(texto.replaceAll(" ", ""));

    o que acontece:

    1. Procura todos os espaços (" ").
    2. Substitui por nada ("").
    3. Resultado: "AnaMaria"

    Depois, quando você faz: 
        texto.replaceAll(" ", "").length

    É como se o JavaScript fizesse:
        "Ana Maria"
        ↓
        "AnaMaria"
        ↓
        8

    Então você conta apenas as letras, sem os espaços.
*/