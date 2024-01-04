// ÁREA DO TERRENO

/*************************************************************************************************************************
 *
 * Realize um algoritmo para imprimir a área do terreno retangular e o valor de venda do mesmo.
 * Usuário deve informar as dimensões em metros (frente e lateral) do terreno além do valor cobrado pelo metro quadrado
 *
 *************************************************************************************************************************/

// Preparação para receber entradas do usuário
const prompt = require("prompt-sync")();

// Declaração das variáveis
var valorMetroQuadrado, metrosFrente, metrosLateral, valorFinalTerreno;

// Obtenção dos dados inseridos no teclado pelo usuário e armazenamento nas variáveis
metrosFrente = prompt("Informe os metros da frente do terreno: ");
metrosLateral = prompt("Informe os metros da lateral do terreno: ");
valorMetroQuadrado = prompt("Informe o valor do metro quadrado: ");

// Cálculo da área do terreno
area = metrosFrente * metrosLateral;

// Cálculo do valor final do terreno
valorFinalTerreno = area * valorMetroQuadrado;

// Exibição dos dados na tela do usuário
console.log(
  "Area total do terreno de " +
    metrosFrente +
    " mts de frente com " +
    metrosLateral +
    " mts de lateral e: " +
    area
);
console.log("O valor deste terreno é R$ " + valorFinalTerreno);
