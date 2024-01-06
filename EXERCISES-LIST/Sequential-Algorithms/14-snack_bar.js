// LANCHONETE

/************************************************************************************************************************
 *
 * A lanchonete Gostosura vende apenas um tipo de sanduíche, cujo recheio inclui:
 *
 *           - 2 fatias de queijo
 *           - 1 fatia de presunto
 *           - 1 rodela de hambúrguer.
 *
 * Sabendo que cada fatia de queijo ou presunto pesa 50 gramas, e que a rodela de hambúrguer pesa 120 gramas,
 * faça um algoritmo em que o dono forneça a quantidade de sanduíches a fazer, e a máquina informe as quantidades (em
 * quilos) de queijo, presunto e carne necessários para compra.
 *
 ***********************************************************************************************************************/

// Preparação para receber entradas do usuário
const prompt = require("prompt-sync")();

// Preparação para receber entradas do usuário
let quantidadeSanduiches = parseInt(
  prompt("Digite a quantidade de sanduíches a fazer: ")
);

// O peso de cada ingrediuente em gramas
let pesoQueijoPresunto = 50; // Peso de cada fatiia de queijo ou presunto
let pesoHamburguer = 120; // Peso da rodela de hamburguer

// Calculando o total de peso em cada ingrediente em gramas
let pesoTotalQueijo = quantidadeSanduiches * 2 * pesoQueijoPresunto; // 2 fatias de queijo por sanduíche
let pesoTotalPresunto = quantidadeSanduiches * pesoQueijoPresunto; // 1 fatia de presunto por sanduíche
let pesoTotalCarne = quantidadeSanduiches * pesoHamburguer;

// Convertendo os pesos de gramas para quilogramas
let pesoTotalQueijoEmKg = pesoTotalQueijo / 1000;
let pesoTotalPresuntoEmKg = pesoTotalPresunto / 1000;
let pesoTotalCarneEmKg = pesoTotalCarne / 1000;

console.log(
  "Para produzir " + quantidadeSanduiches + " sanduíches serão necessários:\n"
);
console.log(pesoTotalQueijoEmKg.toFixed(2) + " kgs de mussarela");
console.log(pesoTotalPresuntoEmKg.toFixed(2) + " kgs de presunto");
console.log(pesoTotalCarneEmKg.toFixed(2) + " kgs de hambúrguer");
