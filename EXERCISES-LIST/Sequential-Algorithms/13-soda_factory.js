// FÁBRICA DE REFRIGERANTE

/*************************************************************************************
 *
 * A fábrica de refrigerantes Meia-Cola vende seu produto em três formatos:
 *
 *      - lata de 350 ml,
 *      - garrafa de 600 ml
 *      - garrafa de 2 litros.
 *
 * Se um comerciante compra uma determinada quantidade de cada formato,
 * faça um algoritmo para calcular quantos litros de refrigerante ele comprou.
 *
 *************************************************************************************/

// Preparação para receber entradas do usuário
const prompt = require("prompt-sync")();

let quantidadeLatas = parseInt(
  prompt("Digite a quantidade de latas de 350ml:")
);
let quantidadeGarrafas600ml = parseInt(
  prompt("Digite a quantidade de garrafas de 600ml:")
);
let quantidadeGarrafas2l = parseInt(
  prompt("Digite a quantidade de garrafas de 2 litros:")
);

// Calculando o total de litros
const litrosLatas = quantidadeLatas * 0.35;
const litrosGarrafas600ml = quantidadeGarrafas600ml * 0.6;
const litrosGarrafas2l = quantidadeGarrafas2l * 2;

const totalLitros = litrosLatas + litrosGarrafas600ml + litrosGarrafas2l;

console.log("A quantidade total de litros é: " + totalLitros);
