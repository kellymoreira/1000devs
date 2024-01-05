// SALÁRIO FUNCIONÁRIO

/************************************************************************************************************************
 *
 * Faça um algoritmo para ler o salário de um funcionário e aumentá-Io em 15%.
 *
 * Após o aumento, desconte 11% de INSS e 8% de FGTS.
 * Imprima o salário inicial, o salário com o aumento, o salário final, o desconto do INSS, o desconto do FGTS e
 * o total  de descontos (INSS+FGTS).
 *
 ***********************************************************************************************************************/

// Preparação para receber entradas do usuário
const prompt = require("prompt-sync")();

var salarioInicial, descontoINSS, descontoFGTS;

salarioInicial = Number(prompt("Informe o salário: "));
descontoINSS = 151.8;
descontoFGTS = 110.4;

console.log("Salário Inicial: " + salarioInicial);

console.log("Salário Reajustado: " + (salarioInicial * 0.15 + salarioInicial));

console.log("Desconto 11% INSS: " + descontoINSS);

console.log("Desconto 8% FGTS: " + descontoFGTS);

console.log("Total Descontos INSS + FGTS: " + Number((descontoINSS + descontoFGTS).toFixed(2)));

console.log("Salário Final: " + (salarioInicial * 0.15 + (salarioInicial - descontoFGTS - descontoINSS)));
