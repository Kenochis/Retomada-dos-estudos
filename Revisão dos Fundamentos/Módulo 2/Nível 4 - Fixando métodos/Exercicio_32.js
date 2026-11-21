/*  Minha missão:

    1. Organize os alunos da maior para a menor nota.
    2. Mostre a classificação completa.
    3. Mostre o nome do primeiro colocado.
*/

const alunos = [
    { nome: "Carlos", nota: 7 },
    { nome: "Ana", nota: 9 },
    { nome: "Pedro", nota: 6 },
    { nome: "Mariana", nota: 10 },
    { nome: "João", nota: 8 }
];

const organizandoAlunosPorNota = alunos.slice(0, 5); // Copiando parte do array original.

organizandoAlunosPorNota.sort((a, b) => { // Ordenando por notas decrescentes.
    return b.nota - a.nota;
});

const melhorAluno = organizandoAlunosPorNota[0]; // selecionando o aluno que ficou no topo.


organizandoAlunosPorNota.forEach((aluno) => { console.log(`${aluno.nome} - ${aluno.nota}`); }); // Mostrando Classificação.
console.log(`Primeiro colocado: ${melhorAluno.nome}`); // Mostrando melhor colocado.

// Concluido