const prompt = require("readline-sync");
// let i;

// for (i = 1; i <= 5; i++) {
//   console.log(i);
// }

// let frutas = ["manga", "uva", "banana", "maca"];
// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

// let numeroMaior = 0;
// let numeroUsuario;

// for (let i = 0; i <= 5; i++) {
//   numeroUsuario = Number(prompt.question("Informe o numero"));

//   if (numeroUsuario > numeroMaior) {
//     numeroMaior = numeroUsuario;
//   }
// }
// console.log(numeroMaior);

//pecorrer o for
const nome = "augusto";
console.log(nome.length);
for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);

  if (i === 4) {
    continue;
  }
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}
