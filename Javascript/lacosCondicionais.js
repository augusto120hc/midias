const prompt = require("readline-sync");

let saldo = Number(prompt.question("qual seu saldo?"));

let nomemae = prompt.question("digite o nome da sua mae");
console.log(nomemae);

while (saldo < 0) {
  saldo = Number(prompt.question("Valor inválido, digite outro valor"));
}
console.log(saldo);
