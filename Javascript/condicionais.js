const prompt = require("readline-sync");
//const idade = Number(prompt.question("Qual a idade?"));

//const maiorIdade = idade;
//if (maiorIdade > 18) {
//  console.log("maior de idade");
//} else {
//  console.log("é menor de idade");
//}
//let media = 7;
//if (media >= 7) {
//  console.log("Aprovado 😃 ✔");
//} else if (media >= 5) {
//  console.log("Prova final");
//} else {
//  console.log("Reprovado");
//}
const num = Number(prompt.question("qual sua idade"));
console.log(num);

const temCNH = false;
if (num >= 18) {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}
