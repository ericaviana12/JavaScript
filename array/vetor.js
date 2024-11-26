/**
 * Estrutura de dados array
 * @author Erica Viana
 */

//                 [0]      [1]      [2]      [3]      [4]
let alunosEM1 = ["Tania", "Pedro", "Maria", "Joao", "Viviane"]

console.clear()

console.log(typeof(alunosEM1))

// O comando abaixo exibe os elementos do vetor
console.log(alunosEM1)

// O comando abaixo identifica o número de elementos de um vetor
console.log(alunosEM1.length)

// O comando abaixo exibe o índice do array associado ao elemento
console.table(alunosEM1)

// O comando abaixo exibe o elemento do índice selecionado
console.log(alunosEM1[2])

// O comando abaixo adiciona um elemento ao vetor
alunosEM1.push("Jorge")

// O comando abaixo exibe os elementos do vetor
console.table(alunosEM1)

// Para alterar um elemento do vetor, é necessário usar o índice
alunosEM1[3] = "Joaozinho"

// O comando abaixo exibe os elementos do vetor
console.table(alunosEM1)

// O comando abaixo remove o último elemento do vetor
alunosEM1.pop()

// O comando abaixo exibe os elementos do vetor
console.table(alunosEM1)

// Removendo um elemento específico sem alterar o índice, neste caso é necessário fornecer o índice a ser excluído
delete alunosEM1[1]

// O comando abaixo exibe os elementos do vetor
console.table(alunosEM1)