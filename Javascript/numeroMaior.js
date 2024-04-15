const prompt = require("readline-sync");

let numeroUsuario = 0;
let numeroMaior = 0;
let i = 0;

while (true) {
  numeroUsuario = Number(
    prompt.question("Digite um numero (digite um número negativo para parar): ")
  );
  // Verifica se o número digitado é negativo para sair do loop
  if (numeroUsuario < 0) {
    break;
  }
  if (numeroUsuario > numeroMaior) {
    numeroMaior = numeroUsuario;
  }
  i++;
}
console.log("O maior número digitado é:", numeroMaior);
