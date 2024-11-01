/**
 * Verificar maioridade
 * @author Erica Viana
 */

const input = require('readline-sync')

// Variáveis - O algoritmo
let idade

console.clear()

// Exibir o texto entre "" (aspas)
console.log("Verificar maioridade")

// Entrada - Atribuir valores as variáveis
idade = Number(input.question("Digite a idade:"))

// Saída - Resultado
console.log(`Idade: ${idade}`)
if (idade < 18) {
    console.log("Menor de idade")
} else {
    console.log("Maior de idade")
}
