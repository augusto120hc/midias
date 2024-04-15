const notas = [5, 7, 8, 3, 21, 6];
const numeros = [5, 7, 8, 3, 21, 6];
let pessoas = ["junior", 34, 1.56, false];

console.log(pessoas[0], notas[2]);

pessoas[3] = true;
pessoas[1] = 5;
console.log(pessoas[3]);
console.log(pessoas[1]);

// fatiamento de arrays
console.log(notas.slice(0, 2));

// Adicionr elemento no array no final
notas.push(34);
console.log(notas);

// adicionar no começo
notas.unshift(22);
console.log(notas);

// remover elemento no final
notas.pop();
notas.pop();
notas.pop();
console.log(notas);

// Remover o primeiro
notas.shift();
console.log(notas);

// Ver se o elemento existe
console.log(notas.includes(50));
if (notas.includes(5)) {
  console.log("Exite esse numero");
} else {
  console.log("Opa!");
}

//  * ver o elemento e o indice
const indice = notas.indexOf(6);
console.log(indice);

// Pegar o ultimo elemento do indice
// const indicenumeros = numeros.lastIndexOf()
console.log(numeros.lastIndexOf(8));

// Pecorrer um array
console.clear();
const arr = [34, 55, 65, 76, 34, 23];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
