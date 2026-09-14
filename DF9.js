function encontrarMaiorPalavra(frase) {
  // Regex remove pontuações comuns antes de separar as palavras.
  const fraseLimpa = frase.replace(/[.,!?;:()"']/g, "");
 
  // split(" ") quebra a frase em um array de palavras usando o espaço como separador.
  // filter remove strings vazias (caso haja espaços duplos).
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
