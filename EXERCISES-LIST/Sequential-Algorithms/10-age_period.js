// PERÍODO DE IDADE

/******************************************************************************************************
 *
 * Faça um algoritmo que receba o ano de nascimento de uma pessoa e o ano atual, calcule e mostre:
 *
 *        a) a idade dessa pessoa em anos
 *        b) a idade dessa pessoa em meses
 *        c) a idade dessa pessoa em dias (considere todos os meses com 30 dias)
 *        d) a idade dessa pessoa em semanas (considere que todos os messes possuem 4 semanas)
 *
 *******************************************************************************************************/

// Preparação para receber entradas do usuário
const prompt = require("prompt-sync")();

// Função para calcular a idade em anos, meses, dias e semanas
function calcularIdade(anoNascimento, anoAtual) {
  // Calcula a idade em anos
  let idadeAnos = anoAtual - anoNascimento;

  // Calcula a idade em meses
  let idadeMeses = idadeAnos * 12;

  // Calcula a idade em dias (considerando todos os meses com 30 dias)
  let idadeDias = idadeMeses * 30;

  // Calcula a idade em semanas (considerando que todos os meses possuem 4 semanas)
  let idadeSemanas = idadeMeses * 4;

  // Exibe os resultados no console
  console.log(
    `A idade desta pessoa em\nanos e: ${idadeAnos}\nmeses e: ${idadeMeses}\ndias e: ${idadeDias}\nsemanas e: ${idadeSemanas}`
  );
}

// Solicita o ano inicial ao usuário
const anoInicial = parseInt(prompt("Digite o ano inicial:"));

// Solicita o ano final ao usuário
const anoFinal = parseInt(prompt("Digite o ano final:"));

// Chama a função para calcular e exibir a idade
calcularIdade(anoInicial, anoFinal);

