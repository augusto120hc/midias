const prompt = require("readline-sync");

let notaAluno = Number(prompt.question("Digite a nota: "));

let somaNota = 0;
let contador = 0;

while (notaAluno >= 0) {
  somaNota = somaNota + notaAluno;
  contador++;
  notaAluno = Number(prompt.question("digite outra nota: "));
}

console.log(somaNota);
console.log("A media eh: ", somaNota / contador);
