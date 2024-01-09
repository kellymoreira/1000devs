// PADARIA

/************************************************************************************************************************
 *
 * Uma padaria vende uma certa quantidade de pães franceses e uma quantidade de broas a cada dia.
 * Cada pãozinho custa R$ 0,12 e a broa custa R$ 1,60.
 * Ao final do dia, o dono quer saber quanto arrecadou com a venda dos pães e broas (juntos), e quanto deve
 * guardar numa conta de poupança (10% do total arrecadado) para realizar uma reforma.
 *
 * Você foi contratado para fazer os cálculos para o dono.
 * Com base nestes fatos, faça um algoritmo para ler as quantidades de pães e de broas, o valor da reforma e depois
 * calcule:
 *
 * O valor arrecado, o valor a ser depositado na poupança e quantos dias serão necessários, caso mantenha o mesmo
 * faturamento, para custear a reforma.
 *
 * Requisito adicional: A quantidade de dias deve ser retornado como um valor inteiro.
 *
 * Exemplo: - 3.78 dias deverá retornar 4 dias
 *          - 9.2 dias deverá retornar 10 dias
 *          - 10.89 dias deverá retornar 11 dias
 *
 ***********************************************************************************************************************/

// Preparação para receber entradas do usuário
const prompt = require("prompt-sync")();

// Recebendo as quantidades de pães e broas, e o valor da reforma
let quantidadePaes = parseInt(prompt("Digite a quantidade de pães vendidos: "));
let quantidadeBroas = parseInt(prompt("Digite a quantidade de broas vendidas: "));
let valorReforma = parseFloat(prompt("Digite o valor da reforma R$: "));

// Preços
const precoPao = 0.12;
const precoBroa = 1.6;
const percentualPoupanca = 0.1;

// Calculando o faturamento com a venda de pães e broas
let faturamentoBroas = quantidadeBroas * precoBroa;
let faturamentoPaes = quantidadePaes * precoPao;
let faturamentoDiario = faturamentoBroas + faturamentoPaes;

// Calculando o valor a ser depositado na poupança (10% do total arrecadado)
let valorPoupanca = faturamentoDiario * percentualPoupanca;

// Calculando quantos dias serão necessários para custear a reforma
let diasNecessarios = Math.ceil(valorReforma / valorPoupanca);

console.log("\nFaturamento com a venda de broas: R$ " + faturamentoBroas.toFixed(2));
console.log("Faturamento com a venda de pães: R$ " + faturamentoPaes.toFixed(2));
console.log("Faturamento diário (pães + broas): R$ " + faturamentoDiario.toFixed(2));
console.log("Valor do depósito na poupança: R$ " + valorPoupanca.toFixed(2));
console.log("Para pagar a reforma serão necessários: " + diasNecessarios + " dias");
