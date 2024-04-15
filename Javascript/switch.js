const permissoes = "aluno"; // || 'aluno' || 'professor' || 'admin'

switch (permissoes) {
  case "aluno":
    console.log("você só pode visualizar as aulas");
    break;
  case "professor":
    console.log("Voce pode alterar as aulas");
    break;
  case "admin":
    console.log("Você pode fazer tudo");
    break;
  default:
    console.log("não é usuário");
}
