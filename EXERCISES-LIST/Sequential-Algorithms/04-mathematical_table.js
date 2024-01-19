// TABUADA DE SOMA(+), SUBTRAÇÃO(-), MULTIPLICAÇÃO(*), DIVISÃO(/)

/************************************************************************************************************************
 * 
 * Faça um algoritmo que calcule e mostre a tabuada de (+, -, * e /) um número digitado pelo usuário.
 * 
 * OBS: Quando se calcula em uma substração um número menor de um número maior (ex:3 - 10) o resultado será 
 * um número negativo.
 * 
 * Pesquise como desprezar o sinal negativo para sempre termos um número positivo.
 * 
 ***********************************************************************************************************************/

// Preparação para receber entradas do usuário
const prompt = require('prompt-sync')();

numero = Number(prompt("Digite um número: "));

console.log("Tabuada do + e - para o numero ", numero);
console.log(numero + " + 0 =  " + (numero + 0) + "            " + numero + " - 0 = ", Math.abs(numero - 0)   )
console.log(numero + " + 1 =  " + (numero + 1) + "            " + numero + " - 1 = ", Math.abs(numero - 1)   )
console.log(numero + " + 2 =  " + (numero + 2) + "            " + numero + " - 2 = ", Math.abs(numero - 2)   )
console.log(numero + " + 3 =  " + (numero + 3) + "            " + numero + " - 3 = ", Math.abs(numero - 3)   )
console.log(numero + " + 4 =  " + (numero + 4) + "            " + numero + " - 4 = ", Math.abs(numero - 4)   )
console.log(numero + " + 5 =  " + (numero + 5) + "            " + numero + " - 5 = ", Math.abs(numero - 5)   )
console.log(numero + " + 6 =  " + (numero + 6) + "            " + numero + " - 6 = ", Math.abs(numero - 6)   )
console.log(numero + " + 7 =  " + (numero + 7) + "            " + numero + " - 7 = ", Math.abs(numero - 7)   )
console.log(numero + " + 8 =  " + (numero + 8) + "            " + numero + " - 8 = ", Math.abs(numero - 8)   )
console.log(numero + " + 9 =  " + (numero + 9) + "            " + numero + " - 9 = ", Math.abs(numero - 9)   )
console.log("Tabuada da / e * para o numero ", numero);
console.log(numero + " * 0 =  " + (numero * 0) + "            " + numero + " / 0 = não existe numéro dividido por 0")
console.log(numero + " * 1 =  " + (numero * 1) + "            " + numero + " / 1 = ", (numero / 1).toFixed(2))
console.log(numero + " * 2 =  " + (numero * 2) + "            " + numero + " / 2 = ", (numero / 2).toFixed(2))
console.log(numero + " * 3 =  " + (numero * 3) + "            " + numero + " / 3 = ", (numero / 3).toFixed(2))
console.log(numero + " * 4 =  " + (numero * 4) + "            " + numero + " / 4 = ", (numero / 4).toFixed(2))
console.log(numero + " * 5 =  " + (numero * 5) + "            " + numero + " / 5 = ", (numero / 5).toFixed(2))
console.log(numero + " * 6 =  " + (numero * 6) + "            " + numero + " / 6 = ", (numero / 6).toFixed(2))
console.log(numero + " * 7 =  " + (numero * 7) + "            " + numero + " / 7 = ", (numero / 7).toFixed(2))
console.log(numero + " * 8 =  " + (numero * 8) + "            " + numero + " / 8 = ", (numero / 8).toFixed(2))
console.log(numero + " * 9 =  " + (numero * 9) + "            " + numero + " / 9 = ", (numero / 9).toFixed(2))




