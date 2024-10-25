/**
 * Tabuada
 * @author Erica Viana
 */

// Importar a biblioteca read-linesync
const input = require('readline-sync')

// Variáveis - O algoritmo
let valor

console.clear()

// Exibir o texto entre "" (aspas)
console.log("Tabuada")

valor = Number(input.question("Digite o valor da tabuada: "))
for (let i = 1; i < 11; i++) {
    console.log(`${valor} x ${i} = ${valor * i}`)
}