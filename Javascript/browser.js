const prompt = require("readline-sync");
const idade = prompt.question("Qual sua idade");
const idadeNumber = Number(idade);
console.log(idade, typeof idade);
console.log(idade, typeof idadeNumber);

console.log(String(22), typeof Boolean(2));
console.log(Boolean(9));
console.log(Number("um"));
console.log(1 + "34");
console.log(5 - "7");
console.log(3 * "5");
console.log(2 + 4 - "3");
