function calcularIMC(peso, altura) {

  const imcBruto = peso / (altura * altura);
 
  const imc = Math.round(imcBruto * 100) / 100;
 
  let classificacao;
  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 25.0) {
    classificacao = "Peso normal";
  } else if (imc < 30.0) {
    classificacao = "Sobrepeso";
  } else if (imc < 35.0) {
    classificacao = "Obesidade Grau I";
  } else if (imc < 40.0) {
    classificacao = "Obesidade Grau II";
  } else {
    classificacao = "Obesidade Grau III";
  }
 
  return { imc, classificacao };
}

console.log(calcularIMC(59, 1.69));