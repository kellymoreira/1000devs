// FERRADURAS DE CAVALOS

/************************************************************************************************************************
 *
 * Faça um algoritmo para calcular quantas ferraduras são necessárias para equipar todos os cavalos comprados para um
 * haras.
 * O usuário devera informar a quantidade de cavalos adquiridos.
 *
 ***********************************************************************************************************************/

// Preparação para receber entradas do usuário
const prompt = require("prompt-sync")();

var cavalos, valorFerradura, totalFerraduras;

cavalos = Number(prompt("Informe a quantidade de cavalos: "));
valorFerradura = Number(prompt("Informe o valor de cada ferradura: "));
totalFerraduras = cavalos * 4; // Cavalo tem 4 patas

console.log("A quantidade de ferraduras necessárias: " + totalFerraduras);
console.log("Valor total para compra das ferraduras: R$ " + totalFerraduras * cavalos);
