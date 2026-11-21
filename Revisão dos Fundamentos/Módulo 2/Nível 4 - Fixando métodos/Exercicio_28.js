/*  Minha missão:

    1. Encontre o usuário com ID 3.
    2. Mostre seu nome.
    3. Tente encontrar o usuário com ID 10.
    4. Verifique se ele foi encontrado.
*/

const usuarios = [
    { id: 1, nome: "Carlos" },
    { id: 2, nome: "Ana" },
    { id: 3, nome: "Pedro" },
    { id: 4, nome: "Mariana" }
];

const usuarioId3 = usuarios.find((usuario) => { return usuario.id === 3; }); // Procurando usuario com id 3.

console.log(`Usuário encontrado com o ID 3: ${usuarioId3.nome}`); // Mostrando apenas o nome do usuario encontrado.


const usuarioId10 = usuarios.find((usuario) => { return usuario.id === 10; }); // Procurando usuario com id 10.

console.log(`Usuário com o ID 10: ${usuarioId10}`); // Mostrando resultado da procura.

// Concluido