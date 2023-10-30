// FIRST EXERCISE

/****************************************************************************************************************************
* 
* 1. Faça um programa que possua um vetor denominado A que armazene 6 números inteiros. 
* O programa deve executar os seguintes passos:
* 
* (a) Atribua diretamente no vetor os seguintes valores: 1, 0, 5, -2, -5, 7.
* (b) Armazene em uma variável inteira (simples) a soma entre os valores das posições: A[0], A[1] e A[5] do vetor e mostre 
* na tela esta soma.
* (c) Modifique o vetor na posição 4, atribuindo a esta posição o valor 100.
* (d) Mostre na tela cada valor do vetor A, um em cada linha. 
* 
****************************************************************************************************************************/
 
// (a):
const A = [1, 0, 5, -2, -5, 7];

// (b):
const sum = A[0] + A[1] + A[5];
console.log("Soma de A[0], A[1] e A[5]: " + sum);

// (c):
A[4] = 100;

// (d):
console.log("Valores do vetor A:");
for (let i = 0; i < A.length; i++) {
    console.log(A[i]);
}

