function celsiusParaFahrenheit(celsius) {

  if (typeof celsius !== "number" || Number.isNaN(celsius)) {
    throw new Error("Valor inválido: informe um número.");
  }

  return Math.round((celsius * 1.8 + 32) * 100) / 100;
}
 
function fahrenheitParaCelsius(fahrenheit) {
  if (typeof fahrenheit !== "number" || Number.isNaN(fahrenheit)) {
    throw new Error("Valor inválido: informe um número.");
  }

  return Math.round(((fahrenheit - 32) / 1.8) * 100) / 100;
}

console.log("86°F em C:", fahrenheitParaCelsius(86));