// DIA E MÊS

/******************************************************************************************************
 *
 * Entrar com o dia e o mês de uma data e informar quantos dias se passaram desde o nício do ano.
 * Esqueça a questão dos anos bissextos e considere sempre que um mês possui 30 dias.
 *
 ******************************************************************************************************/

const prompt = require("prompt-sync")();

function calcularDias() {
  let mesDias = 30;
  let calculo = mesDias * mes + dia;

  console.log("A quantidade de dias que se passaram foi: " + calculo + " dias. ");
}

dia = parseInt(prompt("Digite o dia: "));
mes = parseInt(prompt("Digite o mês: "));

calcularDias(dia, mes);
