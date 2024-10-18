/**
 * Cálculo de idade para votação
 * @author Erica Viana
 */

const input = require('readline-sync') // Importa a biblioteca readline-sync

// Variáveis - O algoritmo
let idade

console.clear()

// Exibir o texto entre "" (aspas)
console.log("Cálculo de idade para votação")

// Entrada
idade = Number(input.question("Digite sua idade: "))

// Saída
console.log(`Sua idade é: ${idade}`)

if (idade < 16) {
  console.log("Proibido votar devido à sua idade")
} else if (idade > 17 && idade < 71) {
  console.log("Voto obrigatório")
} else {
  console.log("Voto facultativo (não obrigatório)")
}