// CONTA DE BAR

/**********************************************************************************************************
 *
 * Três amigos: Carlos, André e Felipe, decidiram rachar igualmente a conta de um bar.
 *
 * Faça um algoritmo para ler o valor total da conta e imprimir quanto cada um deve pagar,
 * mas faça com que Carlos e André não paguem centavos.
 *
 * Ex: uma conta de R$101,53 resulta em R$33,00 para Carlos, R$33,00 para André e R$35,53 para Felipe.
 *
 *********************************************************************************************************/

// Preparação para receber entradas do usuário
const prompt = require("prompt-sync")();

// Recebendo o valor total da conta do usuário
let valorTotalConta = parseFloat(prompt("Informe o valor da conta R$:"));

// Calculando quanto cada amigo deve pagar
let valorPorAmigo = Math.floor(valorTotalConta / 3);
let centavosRestantes = (valorTotalConta * 100) % 300; // Calculando os centavos restantes

// Dividindo o valor igualmente entre Carlos, André e Felipe
let valorCarlos = valorPorAmigo;
let valorAndre = valorPorAmigo;
let valorFelipe = valorPorAmigo + centavosRestantes / 100; // Convertendo centavos de volta ao valor decimal

console.log("Carlos pagará: R$ " + valorCarlos);
console.log("André pagará: R$ " + valorAndre);
console.log("Felipe pagará: R$ " + valorFelipe.toFixed(2));
