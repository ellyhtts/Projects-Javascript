function gerarTabuada(numero, limite = 10) {

  const linhas = []; 
 
  for (let i = 1; i <= limite; i++) {

    linhas.push(`${numero} x ${i} = ${numero * i}`);
  }
 
  return linhas;
}

console.log(gerarTabuada(10, 10));