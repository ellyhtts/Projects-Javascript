function gerarTokenAleatorio(tamanho = 8, tipo = "alfanumerico") {
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
 
  let caracteresPermitidos;
  if (tipo === "numerico") {
    caracteresPermitidos = numeros;
  } else if (tipo === "letras") {
    caracteresPermitidos = letras;
  } else {
    caracteresPermitidos = letras + numeros; 
  }
 
  let token = "";
  for (let i = 0; i < tamanho; i++) {

    const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
    token += caracteresPermitidos[indiceAleatorio]; 
  }
 
  return token;
}

console.log(gerarTokenAleatorio(6, "numerico"));