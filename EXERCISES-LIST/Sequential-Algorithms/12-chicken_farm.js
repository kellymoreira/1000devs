// GRANJA FRANGOTECH

/************************************************************************************************************************
 *
 * A granja FrangoTech possui um controle automatizado de cada frango da sua produção:
 *
 *       - No pé direito do frango há um anel com um chip de identificação;
 *       - No pé esquerdo são dois anéis para indicar o tipo de alimento que ele deve consumir.
 *
 * Sabendo que o anel com chip custa R$4,00 e o anel de alimento custa R$3,50, faça um algoritmo para calcular o gasto
 * total da granja para marcar todos os seus frangos que deverá ser informado pelo usuário.
 *
 ***********************************************************************************************************************/

// Preparação para receber entradas do usuário
const prompt = require("prompt-sync")();

function calcularGastos(aneis) {
  let anelIdentificacao = 4.0; // Definindo o custo de um único anel de identificação
  let aneisAlimento = 3.5 * 2; // Definindo o custo total de dois anéis de alimento

  let aneisTotal = (anelIdentificacao + aneisAlimento) * aneis; // Calculando o custo total dos anéis multiplicado pelo número de frangos

  console.log(
    "O valor total para identificar os frangos é: " + aneisTotal.toFixed(2)
  ); // Exibindo o custo total dos anéis
}

valorTotal = parseInt(prompt("Digite a quantidade de frangos: ")); // Solicitando a quantidade de frangos ao usuário

calcularGastos(valorTotal); // Chamando a função e passando o "valorTotal" como argumento
