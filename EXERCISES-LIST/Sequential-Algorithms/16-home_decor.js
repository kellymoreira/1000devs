// LOJA DE DECORAÇÃO

/********************************************************************************************************
 *
 * Uma loja de decoração precisa aumentar o seu faturamento para o próximo mês em 20%.
 * Esta loja deseja atingir este objetivo aumentando a venda de três produtos.
 * O produto 1 custa R$ 150 o produto 2 R$ 220,00 e o produto 3 R$ 97.00.
 * faça um algoritmo que receba o valor de faturamento do último mês e apresente:
 *
 *          a) O faturamento do próximo mês para bater a meta de 20%.
 *          b) A quantidade de peças apenas do produto 1 necessárias para obter a meta desejada.
 *          c) A quantidade de peças apenas do produto 2 necessárias para obter a meta desejada.
 *          d) A quantidade de peças apenas do produto 3 necessárias para obter a meta desejada.
 *
 ******************************************************************************************************/

// Preparação para receber entradas do usuário
const prompt = require("prompt-sync")();

// Definindo os preços dos produtos
const precoProduto1 = 150.0;
const precoProduto2 = 220.0;
const precoProduto3 = 97.0;

// Recebendo o faturamento do último mês do usuário
let faturamentoUltimoMes = parseFloat(
  prompt("Digite o valor do faturamento anterior:")
);

// Calculando o faturamento do próximo mês para atingir a meta de 20%
let faturamentoProximoMes = faturamentoUltimoMes * 1.2;
let aumento = faturamentoProximoMes - faturamentoUltimoMes;

// Calculando a quantidade necessária de cada produto para atingir a meta
let quantidadeProduto1 = aumento / precoProduto1;
let quantidadeProduto2 = aumento / precoProduto2;
let quantidadeProduto3 = aumento / precoProduto3;

console.log("A meta do próximo mês é: R$ " + faturamentoProximoMes.toFixed(2));
console.log("Um aumento de: R$ " + aumento.toFixed(2));
console.log("Quantidade de peças a serem vendidas para atingirmos a meta:");
console.log("Produto 1: " + quantidadeProduto1.toFixed(2) + " peças");
console.log("Produto 2: " + quantidadeProduto2.toFixed(2) + " peças");
console.log("Produto 3: " + quantidadeProduto3.toFixed(2) + " peças");
