/**
 * JoKenPo
 * @author Erica Viana
 */

// Importar a biblioteca read-linesync
const input = require('readline-sync')

// Variáveis - O algoritmo
let jogador, computador

console.clear()

// Exibir o texto entre "" (aspas)
console.log("JoKenPo")
console.log("1.Pedra")
console.log("2.Papel")
console.log("3.Tesoura")

// Entrada 1 - Lógica do jogador
jogador = Number(input.question("Digite a opcao desejada: "))
console.log("")
switch (jogador) {
    case 1:
        console.log("Jogador escolheu PEDRA")
        break
    case 2:
        console.log("Jogador escolheu PAPEL")
        break
    case 3:
        console.log("Jogador escolheu TESOURA")
        break
    default:
        console.log("Opção inválida")
        break
}

// Entrada 2 - Lógica do computador
computador = Math.floor(Math.random() * 3 + 1)

switch (computador) {
    case 1:
        console.log("Computador escolheu PEDRA")
        break
    case 2:
        console.log("Computador escolheu PAPEL")
        break
    case 3:
        console.log("Computador escolheu TESOURA")
        break
}

// Processamento e saída - Lógica para determinar o vencedor ou declara empate
if (jogador === computador) {
    console.log("Empate")
} else if (jogador === 1 && computador === 3 || jogador === 2 && computador === 1 || jogador === 3 && computador === 2) {
    console.log("Jogador VENCEU")
} else {
    console.log("Computador VENCEU")
}