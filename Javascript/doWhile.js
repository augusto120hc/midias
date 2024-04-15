const prompt = require("readline-sync");

let saldo;
do {
  saldo = Number(prompt.question("Digite um numero: "));
} while (saldo < 0);

console.log(saldo);
