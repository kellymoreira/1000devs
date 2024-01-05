// CÁLCULO DA ÁREA

/*************************************************************************************
 *
 * Faça um algoritmo que leia os dados necessários para calcular e exibir a área:
 *
 * (pesquisa como calcular a área de cada objeto abaixo)
 *
 *         a) de um trapézio.
 *         b) de um quadrado.
 *         c) de um retângulo.
 *         d) de um círculo.
 *         e) de um triângulo.
 *
 *
 ************************************************************************************/

// Preparação para receber entradas do usuário
const prompt = require("prompt-sync")();

// Trapézio
console.log("Área do trapézio");
var baseMaior, baseMenor, alturaTrapezio;

baseMaior = Number(prompt("Informe o valor da base maior: "));
baseMenor = Number(prompt("Informe o valor da base menor: "));
alturaTrapezio = Number(prompt("Informe o valor da altura: "));

console.log(
  "A área do trapézio é: " + ((baseMaior + baseMenor) * alturaTrapezio) / 2
);

// Quadrado
console.log("Área do quadrado");

var valorLado;

valorLado = Number(prompt("Informe o valor de um dos lados: "));
console.log("A área do quadrado é: " + valorLado * 4);

// Retângulo
console.log("Área do retângulo");

var valorLargura, alturaRetangulo;

valorLargura = Number(prompt("Informe o valor da largura: "));
alturaRetangulo = Number(prompt("Informe o valor da altura: "));

console.log("A área do retângulo é: " + valorLargura * alturaRetangulo);

// Círculo
console.log("Área do círculo");

var raio;

raio = Number(prompt("Informe o valor do raio: "));
console.log("A área do círculo é: " + (Math.PI * Math.pow(raio, 2)).toFixed(2));

// Triângulo
console.log("Área do triângulo");

var baseTriangulo, alturaTriangulo;

baseTriangulo = Number(prompt("Informe o valor da base: "));
alturaTriangulo = Number(prompt("Informe o valor altura: "));

console.log("A área do triângulo é: " + (baseTriangulo * alturaTriangulo) / 2);
