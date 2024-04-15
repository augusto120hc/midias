console.clear();

function functeste(nome, curso) {
  console.log(`Olá ${nome}, bem vinao ao curdo de ${curso}`);
}
functeste("Juca", "Design");

function mensagem(nome, idade) {
  console.log("olá", nome, idade);
  console.log("Ola amigo");
}
mensagem("Juca", "44");

function msn(nome, idade) {
  return `Bom dia ${nome}, sua idade é ${idade}`;
}
let mostrar = msn("mosca", "56");
console.log(mostrar);

const dobroNumero = function (numero) {
  return numero * 2;
};
let dobro = dobroNumero(6);
console.log(dobro);

function media(n1, n2, n3) {
  console.log("A média é = ", (n1 + n2 + n3) / 3);
}
media(2, 3, 4);

function mensagem(nome, curso) {
  console.log(`Olá ${nome} você está no curso de ${curso}`);
}
mensagem("Augusto", "Química");

function imprimir(nome, idade) {
  return `Bem-vindo ${nome} você tem ${idade} de idade`;
}

const msn = imprimir("Junior", "33");
console.log(msn);

// const msgg = saudar("augustinho", "JAVA e react");
// console.log(msgg);

// function somar(n1, n2) {
//   return n1 + n2;
// }
// const resul = somar(3, 3);
// console.log(resul + 20);

// function saudacao(nomeDoEstudante, curso = "curso padrão") {
//   // Tamplate string
//   return `Olá, ${nomeDoEstudante}, bem vinso ao ${curso}`;
// }
// const bemVindo = saudacao("Augusto");
// console.log(bemVindo);

// function nomes(nome, idade) {
//   return `Ola ${nome}, você tem ${idade} anos`;
// }
// const mensagem = nomes("Junior", "22");

// console.log(mensagem);
