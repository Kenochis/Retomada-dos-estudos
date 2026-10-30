// Crie uma função que receba um array de jogos e mostre com for...of.

const jogos = ["Minecraft", "The Last of Us", "Horizon", "CS Go"];

function mostrarJogos(colecao) {
    for (const jogo of colecao) {
        console.log(jogo);
    };
};

mostrarJogos(jogos);