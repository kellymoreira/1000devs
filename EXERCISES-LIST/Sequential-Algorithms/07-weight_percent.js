// PESO PORCENTO

/*****************************************************************************
 *
 * Faça um algoritmo que receba o peso de uma pessoa, calcule e mostre:
 *
 *        a) o novo peso se a pessoa engordar 15% sobre o peso digitado
 *        b) o novo peso se a pessoa engordar 20% sobre o peso digitado
 *
 *****************************************************************************/

// Preparação para receber entradas do usuário
const prompt = require("prompt-sync")();

var peso;

peso = Number(prompt("Digite o seu peso: "));

console.log("Caso a pessoa engorde 15% ficará com: " + (peso * 0.15 + peso)," KG");
console.log("Caso a pessoa engorde 20% ficará com: " + peso * 1.2 + " KG");
