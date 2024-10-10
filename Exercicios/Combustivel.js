/**
 * Cálculo do consumo de combustível
 * @author Erica Viana
 */

// Importar a biblioteca read-linesync
const input = require('readline-sync')

// Variáveis - O algoritmo
let consumo, alcool, gasolina

console.clear()

// Exibir o texto entre "" (aspas)
console.log("Qual combustível comprar")

// Entrada - Atribuir valores as variáveis
alcool = Number(input.question("Digite o valor do alcool (em R$): "))
gasolina = Number(input.question("Digite o valor do aasolina (em R$): "))

// Processamento - Fórmula para cálculo do código
consumo = alcool / gasolina

// Exibir a informação se é melhor Alcool ou Gasolina
if (consumo < 0.7) {
    console.log("Alcool")
} else {
    console.log("Gasolina")
}