const numeros = [3, 45, 76, 3, 66, 8, 99];
for (const elemento of numeros) {
  console.log(elemento);
}
for (const indice in numeros) {
  console.log(indice, typeof indice);
  console.log(numeros[indice]);
}
