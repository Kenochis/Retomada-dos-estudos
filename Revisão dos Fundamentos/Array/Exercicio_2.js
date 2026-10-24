/*  Minha missão:

    1. Adicione "C#" ao final.
    2. Adicione "PHP" ao final.
    3. Mostre o Array completo.
    4. Mostre quantas linguagens existem agora.
*/

let linguagemDeProgramação = ["Python", "Java", "Scala"];

linguagemDeProgramação.push("C#");
linguagemDeProgramação.push("PHP");

for (const linguagem of linguagemDeProgramação) {
    console.log(linguagem);
}

console.log(linguagemDeProgramação.length);

//Concluido