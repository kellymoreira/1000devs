// NÚMEROS INTEIROS

/*****************************************************************************************
 *
 * Ler um número inteiro com até quatro dígitos e imprimir a saída da seguinte forma:
 *
 *           MILHARES = x
 *           CENTENA = x
 *           DEZENA = x
 *           UNIDADE = x
 *
 *****************************************************************************************/

// Preparação para receber entradas do usuário
const prompt = require("prompt-sync")();

let valor;

Number(prompt("Digite um número de 4 dígitos: "));

valor = 3421;
console.log(parseInt(valor / 1000) + " MILHARES");
valor = 421;
console.log(parseInt(valor / 100) + " CENTENAS");
valor = 21;
console.log(parseInt(valor / 10) + " DEZENAS");
valor = 1;
console.log(valor + " UNIDADE");
