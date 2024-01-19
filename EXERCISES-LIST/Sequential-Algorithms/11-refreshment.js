// TONEL REFRESCO

/************************************************************************************************************************
 *
 * Um tonel de refresco é feito com 8 partes de água mineral e 2 partes de suco de maracujá.
 * Faça um algoritmo para calcular quantos litros de água e de suco são necessários para se fazer uma certa quantidade
 * de litros de refresco informados pelo usuário.
 *
 ***********************************************************************************************************************/

// Preparação para receber entradas do usuário
const prompt = require("prompt-sync")();

function calcularIngredientes(quantidadeSuco) {
  let aguaMineral = 8;
  let sucoMaracuja = 2;

  let totalProporcao = aguaMineral + sucoMaracuja;

  let litrosAgua = (quantidadeSuco * aguaMineral) / totalProporcao;
  let litrosSuco = (quantidadeSuco * sucoMaracuja) / totalProporcao;

  console.log(
    "Será necessário para fazer " +
      Math.abs(quantidadeSuco) +
      " litros de suco de maracujá:\n" +
      litrosAgua +
      " litros de água\n" +
      litrosSuco.toFixed(2) +
      " litros de suco concentrado de maracujá"
  );
}

quantidadeSuco = parseFloat(
  prompt("Digite a quantidade de litros de suco necessária: ")
);

calcularIngredientes(quantidadeSuco);
