/*  Minha missão:

    1. Adicione a nova tarefa no início.
    2. Mostre a lista atualizada.
    3. Mostre a quantidade de tarefas.
*/

const tarefas = ["Estudar JavaScript", "Fazer exercícios"];

tarefas.unshift("Fazer um bolo", );

console.log(`Lista de tarefas atualizadas:`);
for (const tarefa of tarefas) {
    console.log(tarefa);
}

console.log(`Quantidade de tarefas: ${tarefas.length}`);

// Concluido