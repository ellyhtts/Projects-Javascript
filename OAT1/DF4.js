function validarUsuario(usuario) {

  const { nome, email, senha } = usuario;
 
  const erros = []; 
  if (!nome || nome.trim().length < 3) {
    erros.push("Nome deve ter pelo menos 3 caracteres");
  }
 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    erros.push("E-mail inválido");
  }
 
  if (!senha || senha.length < 6) {
    erros.push("Senha deve ter pelo menos 6 caracteres");
  } else if (!/\d/.test(senha)) {

    erros.push("Senha deve conter ao menos um número");
  }
 
  if (erros.length === 0) {
    return { valido: true };
  }
  return { valido: false, erros };
}

console.log(validarUsuario({ nome: "Ana Silva", email: "ana@exemplo.com", senha: "abc123" }));

