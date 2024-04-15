const prompt = require("readline-sync");

// Random
let numeroAleatorio = parseInt(Math.random() * 10);
let tentativas = 0;

console.log(numeroAleatorio);

let numeroUsuario = Number(prompt.question("Informe um numero entre 0 e 10"));

while (numeroAleatorio !== numeroUsuario) {
  console.log("Voce errou");
  numeroUsuario = Number(prompt.question("Digite outro numero"));
  tentativas++;
}

console.log("Parabens");
console.log("tentativas: ", tentativas);
