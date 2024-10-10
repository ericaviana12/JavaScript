/**
 * Cálculo da média aritmética de 3 valores
 * @author Erica Viana
 */

// Importar a biblioteca read-linesync e a biblioteca colors
const input = require('readline-sync')
const colors = require('colors')

// Variáveis - O algoritmo
let num1, num2, num3, media

// Limpar o Terminal
console.clear()

// Exibir o texto entre "" (aspas)
console.log("Cálculo da média aritmética de 3 números")

// Entrada - Atribuir valores as variáveis
// No console, entradas numéricas precisam ser convertidas com uso do método "Number()" - com o N maiúsculo
num1 = Number(input.question("Digite o primeiro numero: ")) // "Number()" - Converter a resposta inserida em número
num2 = Number(input.question("Digite o segundo numero: "))
num3 = Number(input.question("Digite o terceiro numero: "))

// Processamento - Fórmula para cálculo do código
media = (num1 + num2 + num3) / 3

// Saída - Resultado do processamento
console.log(`Média: ${media.toFixed(1)}`) // ${} - Exibe a concatenação entre a frase e a variável solicitada / .toFixed(1) - Limita os caracteres numéricos à 1 casa decimal

// Exibir a informação se o aluno foi aprovado ou reprovado (Para aprovação média deve ser >= 5)
if (media >= 5) {
    console.log("Aprovado".blue) // Inserir a cor azul no texto em caso de aprovação
} else {
    console.log("Reprovado".red) // Inserir a cor vermelha no texto em caso de reprovação
}