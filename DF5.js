function analisarNumeros(arrayDeNumeros) {

  if (!arrayDeNumeros || arrayDeNumeros.length === 0) {
    return { total: 0, maior: null, menor: null, media: 0, pares: 0, impares: 0 };
  }
 
  const total = arrayDeNumeros.length;
 
  const maior = Math.max(...arrayDeNumeros);
  const menor = Math.min(...arrayDeNumeros);
 
  const soma = arrayDeNumeros.reduce((acc, n) => acc + n, 0);
  const media = Math.round((soma / total) * 100) / 100;
 
  const pares = arrayDeNumeros.filter((n) => n % 2 === 0).length;
  const impares = total - pares; 
 
  return { total, maior, menor, media, pares, impares };
}

console.log(analisarNumeros([6, 9, 7, 50, 70, 84]));