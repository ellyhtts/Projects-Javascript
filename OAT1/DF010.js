function distribuirTimes(listaDeNomes, quantidadeDeTimes) {

  const embaralhada = [...listaDeNomes];
 
  for (let i = embaralhada.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [embaralhada[i], embaralhada[j]] = [embaralhada[j], embaralhada[i]];
  }
 
  const times = Array.from({ length: quantidadeDeTimes }, () => []);
 
  embaralhada.forEach((nome, index) => {
    times[index % quantidadeDeTimes].push(nome);
  });
 
  return times;
}

console.log(
  distribuirTimes(["Ana", "Bruno", "Carlos", "Diana", "Eduardo", "Fernanda"], 2)
);