/*  Minha missão:

    Parte 1 — Calcular as médias:
        Para cada aluno, calcule a média das três notas.

    A fórmula é:
        média = soma das notas / quantidade de notas

    Parte 2 — Identificar os aprovados:
        Considere aprovado o aluno com média maior ou igual a 7.

    Parte 3 — Criar uma lista de aprovados:
        Crie um novo Array contendo apenas os alunos aprovados.

    Parte 4 — Ordenar os aprovados:
        Organize os alunos aprovados da maior para a menor média.

    Parte 5 — Mostrar o resultado:
        Apresente o nome e a média de cada aluno aprovado.
*/

const alunos = [
    { nome: "Ana", notas: [8, 9, 7] },
    { nome: "Carlos", notas: [5, 6, 4] },
    { nome: "Mariana", notas: [10, 9, 10] },
    { nome: "Pedro", notas: [6, 7, 8] },
    { nome: "Julia", notas: [4, 5, 6] }
];

const alunosComMedia = alunos.map((aluno) => { // Criando um novo array com a media dos alunos.
    let soma = 0;

    for (const nota of aluno.notas) {
        soma += nota;
    }

    const media = Number((soma / aluno.notas.length).toFixed(2));

    return {
        nome: aluno.nome,
        media: media
    };
});

const listaDeAprovados = alunosComMedia.filter((aluno) => { // Filtrando alunos aprovados.
    if (aluno.media >= 7){
        return aluno;
    }
});

listaDeAprovados.sort((a, b) => { // Ordenando a lista por media.
    return b.media - a.media;
})

console.log(listaDeAprovados); // mostrando o nome e a media de cada aluno aprovado.


// Concluido