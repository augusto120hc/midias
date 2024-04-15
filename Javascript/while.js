const prompt = require("readline-sync");

let nota = Number(prompt.question("Digite a primeira nota"));

let somaNotas = 0;
let contador = 0;

while (nota >= 0) {
  somaNotas = somaNotas + nota;
  contador++;

  nota = Number(prompt.question("Digite outra nota: "));
}
console.log("A media das notas eh: ", somaNotas / contador);
