// MÉDIA DOS ALUNOS

/************************************************************************************************************************
 *
 * Faça um algoritmo para ler três notas de um aluno em uma disciplina e imprimir a sua média ponderada
 * (as notas tem pesos respectivos de 1, 2 e 3).
 *
 * (Média Ponderada: calculada através da soma dos valores multiplicados pelos seus pesos, dividida pela soma dos pesos)
 *
 ***********************************************************************************************************************/

// Preparação para receber entradas do usuário
const prompt = require("prompt-sync")();

var nota1, nota2, nota3, resultado;

nota1 = Number(prompt("Digite a nota1: "));
nota2 = Number(prompt("Digite a nota2: "));
nota3 = Number(prompt("Digite a nota3: "));

resultado = (nota1 * 1 + nota2 * 2 + nota3 * 3) / 6;

console.log("A media ponderada das notas: " + resultado.toFixed(2));
