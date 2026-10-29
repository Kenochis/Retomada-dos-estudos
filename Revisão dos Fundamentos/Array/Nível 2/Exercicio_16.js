/*  Minha missão:

    1: remova "Estudar CSS" da lista.
    2: substitua "Estudar React" por "Estudar Banco de Dados".
    3: adicione "Estudar APIs REST" na posição imediatamente posterior a "Estudar JavaScript".
    4: mostre o Array atualizado.
*/

const tarefas = [
    "Estudar HTML",
    "Estudar CSS",
    "Estudar JavaScript",
    "Estudar React",
    "Estudar Node.js"
];

tarefas.splice(1, 1);

tarefas.splice(2, 1, "Estudar Banco de Dados");

tarefas.splice(2, 0, "Estudar APIs REST");

console.log(tarefas);

// Concluido