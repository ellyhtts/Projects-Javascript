function calcularContagemRegressiva(dataFutura) {

  const alvoMs = new Date(dataFutura).getTime();
 
  const agoraMs = new Date().getTime();
 
  const diferencaMs = alvoMs - agoraMs;
 
  if (diferencaMs <= 0) {
    return { dias: 0, horas: 0, minutos: 0, segundos: 0, texto: "A data informada já passou." };
  }
 
  const msPorSegundo = 1000;
  const msPorMinuto = msPorSegundo * 60;
  const msPorHora = msPorMinuto * 60;
  const msPorDia = msPorHora * 24;
 
  const dias = Math.floor(diferencaMs / msPorDia);
 
  const horas = Math.floor((diferencaMs % msPorDia) / msPorHora);
  const minutos = Math.floor((diferencaMs % msPorHora) / msPorMinuto);
  const segundos = Math.floor((diferencaMs % msPorMinuto) / msPorSegundo);
 
  const texto = `Faltam ${dias} dias, ${horas}h, ${minutos}m e ${segundos}s`;
 
  return { dias, horas, minutos, segundos, texto };
}

console.log(calcularContagemRegressiva("2026-01-01T00:00:00"));