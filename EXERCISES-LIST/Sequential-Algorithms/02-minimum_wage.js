// SALÁRIO MÍNIMO

/*********************************************************************************************************
 *
 * Faça um algoritmo que receba o valor do salário mínimo e o valor do salário de um funcionário.
 * Calcule e mostre a quantidade de salários mínimos que ganha esse funcionário.
 *
 *********************************************************************************************************/

// Preparação para receber entradas do usuário
const prompt = require("prompt-sync")();

// Declaração das variáveis
var salarioMinimo, salarioFuncionario, quantidadeSalariosMinimos;

// Obtenção dos dados inseridos no teclado pelo usuário e armazenamento nas variáveis
salarioMinimo = Number(prompt("Informe o valor do salário mínimo: "));
salarioFuncionario = Number(prompt("Informe o valor do salário do funcionário: "));

// Cálculo da quantidade de salários mínimos que o funcionário recebe
quantidadeSalariosMinimos = salarioFuncionario / salarioMinimo;

// Exibição dos dados na tela do usuário com a formatação decimal
console.log(
  "O funcionário recebe " +
    quantidadeSalariosMinimos.toFixed(1) +
    " salários mínimos!"
);
