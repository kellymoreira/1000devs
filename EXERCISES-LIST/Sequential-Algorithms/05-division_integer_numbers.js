// DIVISÃO DE NÚMEROS INTEIROS

/************************************************************************************************************************
 *
 * Faça um algoritmo que receba dois números inteiros, calcule e mostre a divisão do primeiro número pelo segundo.
 * Sabe-se que o segundo número não pode ser zero, portanto não é necessário se preocupar com validações.
 *
 * OBS: Para forçar uma divisão de dois números inteiro produzir um resultado fracionário,
 * utilizamos a palavra float entre parênteses.
 *
 * Exemplo: (a/(float)b).
 * Neste caso, forçamos o compilador entender que a variavel b apesar de ser inteira deve ser convertida para float
 *
 ***********************************************************************************************************************/

// Preparação para receber entradas do usuário
const prompt = require("prompt-sync")();

var numeroInteiro1, numeroInteiro2;

numeroInteiro1 = Number(prompt("Informe o valor 1: "));
numeroInteiro2 = Number(prompt("Informe o valor 2: "));

var divisão = numeroInteiro1 / numeroInteiro2;

console.log(
  "A divisão de " +
    numeroInteiro1 +
    " por " +
    numeroInteiro2 +
    " é " +
    divisão.toFixed(2)
);
