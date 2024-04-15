const prompt = require("readline-sync");
// * Operador ternario
const idade = 15;

idade >= 18 ? console.log("Maior de idade") : console.log("Menor de idade");

let idade2 = prompt.question("Digite a idade");
let mensagem = idade2 >= 18 ? console.log("Maior") : console.log("Menor");
console.log(mensagem);
