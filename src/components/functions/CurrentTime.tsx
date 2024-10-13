export function CurrentTime() {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const today = new Date();

  const dia = today.getDate();
  const mes = meses[today.getMonth()];
  const ano = today.getFullYear();

  // Obtém as horas e define se é AM ou PM
  const horas = today.getHours();
  const periodo = horas >= 12 ? "PM" : "AM";

  const minutos = today.getMinutes();
  const segundos = today.getSeconds();

  return { dia, ano, mes, horas, minutos, segundos, periodo };
}
