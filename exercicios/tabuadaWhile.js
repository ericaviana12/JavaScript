/**
 * Tabuada usando a estrutura While
 * @author Erica Viana
 */

// Importar a biblioteca read-linesync
const input = require('readline-sync')

// Variáveis - O algoritmo
let valor
let i = 1 // Apoio a lógica e laço while

// Limpar a tela antes de uma nova entrada
console.clear()

// Exibir o texto entre "" (aspas)
console.log("Tabuada While")

// Entrada
valor = Number(input.question("digite o valor da tabuada: "))
 
while (i < 11) {
    console.log(`${valor} x ${i} = ${valor * i}`)
    i++
}