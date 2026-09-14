function contarCaracteres(texto) {

  const semAcentos = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
 
  let vogais = 0;
  let consoantes = 0;
  let espacos = 0;
  let especiais = 0;
 
  for (const caractereOriginal of semAcentos) {
    const caractere = caractereOriginal.toLowerCase(); 
 
    if (caractere === " ") {
      espacos++;
    } else if ("aeiou".includes(caractere)) {

      vogais++;
    } else if (/[a-z]/.test(caractere)) {

      consoantes++;
    } else {

      especiais++;
    }
  }
  
  return { vogais, consoantes, espacos, especiais, total: texto.length };
}

console.log(contarCaracteres("Desenvolvimento de APIs REST!"));