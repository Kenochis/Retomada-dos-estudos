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

const notasAlunos = alunos.map((aluno) => {
    return aluno.notas;
});

const mediaAlunos = notasAlunos.map((notas) => {
    let soma = 0;

    for (const nota of notas) {
        soma += nota;
    }

    const media = soma / notas.length;

    return Number(media.toFixed(2));
});

function aprovados (media, alunosGeral) {
    let index = [];

    const indexAprovados = media.forEach((nota) => {
        if (nota >= 7){
            index.push(media.indexOf(nota));
        }
    })
    
    let nomeDosAprovados = [];

    const nomes = index.forEach((i) => {
        nomeDosAprovados.push(alunosGeral[i]);
    })

    return nomeDosAprovados;
};

let alunosAprovados = aprovados(mediaAlunos, alunos);

console.log(alunosAprovados);

// preciso substituir a nota dos alunos, pela a média delas..