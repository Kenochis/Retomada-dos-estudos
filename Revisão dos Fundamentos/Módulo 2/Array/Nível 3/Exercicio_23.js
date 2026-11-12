/*  missão: 

    1. Verifique se todos os usuários estão ativos.
    2. Mostre o resultado.
    3. Altere o valor de ativo de Mariana para true.
    4. Verifique novamente se todos estão ativos.
*/

const usuarios = [
    { nome: "Ana", ativo: true },
    { nome: "Carlos", ativo: true },
    { nome: "Mariana", ativo: false },
    { nome: "Pedro", ativo: true }
];

const usuariosAtivos1 = usuarios.every((usuario) => {
    return usuario.ativo;
});

console.log(`1. Todos os usuários estão ativos?: ${usuariosAtivos1}`);
console.log(usuarios);


console.log("-----------------------------------")


usuarios.forEach((usuario) => {
    if (usuario.ativo === false) {
        usuario.ativo = true;
    }
});

const usuariosAtivos2 = usuarios.every((usuario) => {
    return usuario.ativo;
});

console.log(`2. E agora, todos os usuários estão ativos?: ${usuariosAtivos2}`);
console.log(usuarios);

// Concluido