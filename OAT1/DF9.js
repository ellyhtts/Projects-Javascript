function encontrarMaiorPalavra(frase) {

  const fraseLimpa = frase.replace(/[.,!?;:()"']/g, "");
 
  const palavras = fraseLimpa.split(" ").filter((p) => p.length > 0);
 
  let maiorPalavra = "";
  for (const palavra of palavras) {
    if (palavra.length > maiorPalavra.length) {
      maiorPalavra = palavra;
    }
  }
 
  return { palavra: maiorPalavra, tamanho: maiorPalavra.length };
}

console.log(encontrarMaiorPalavra("O desenvolvimento de microsserviços e APIs é essencial."));
