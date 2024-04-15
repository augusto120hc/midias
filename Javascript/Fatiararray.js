const prompt = require("readline-sync");

// pegar uma parte do array
const numeros = [5, 6, 3, 2];
console.log(numeros.slice(0, 3));
console.log(numeros.slice(0));
// Adiciono no final
numeros.push(7);
console.log(numeros);
// Adiciona no início
numeros.unshift(12);
console.log(numeros);
// Remove o último
numeros.pop();
console.log(numeros);
// apaga o primeiro
numeros.shift();
console.log(numeros);
console.clear();

// Saber s um elementa está
console.log(numeros.includes(5));
if (numeros.includes(5)) {
  console.log("Existe");
} else {
  console.log("não existe");
}

const existe = numeros.includes(7);
console.log(existe);

// saber o indice do elemento
const num = [2, 5, 1, 0, 2];
console.log(num.indexOf(5));

// lastindexof o ultimo elemento que tem o indice
console.log(num.lastIndexOf(2));
