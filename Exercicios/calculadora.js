/**
 * Desenvolvimento de uma calculadora
 * @author Erica Viana
 */

// Importar a biblioteca read-linesync
const input = require('readline-sync')

// Variáveis - O algoritmo
let a, b, opcao, restart

do {

console.clear()

// Exibir o texto entre "" (aspas)
console.log("Calculadora")

a = Number(input.question("Digite o primeiro numero: "))
b = Number(input.question("Digite o segundo numero: "))

console.log("")
console.log("1. Somar")
console.log("2. Subtrair")
console.log("3. Multiplicar")
console.log("4. Dividir")
console.log("5. Porcentagem")
console.log("")
opcao = Number(input.question("Digite a opcao desejada: "))

switch (opcao) {
    case 1:
        somar(a, b)
        break
    case 2:
        subtrair(a, b)
        break
    case 3:
        multiplicar(a, b)
        break
    case 4:
        dividir(a, b)
        break
    case 5:
        porcentagem(a, b)
        break
    default:
        console.log("Opção inválida")
        break
}

// Funções com parâmetros e retorno (não atribuídas) podem ser criadas em qualquer lugar

// Somar
function somar(a, b) {
    return console.log(`A soma de ${a} + ${b} = ${a + b}`)
}

// Subtrair
function subtrair(a, b) {
    return console.log(`A subtração de ${a} - ${b} = ${a - b}`)
}

// Multiplicar
function multiplicar(a, b) {
    return console.log(`A multiplicação de ${a} * ${b} = ${a * b}`)
}

// Dividir
function dividir(a, b) {
    if (b !== 0) {
        return console.log(`A divisão de ${a} / ${b} = ${a / b}`)
    } else {
        console.log("Erro: divisão por zero")
    }
}

// Porcentagem
function porcentagem(a, b) {
    return console.log(`${a}% de ${b} = ${(a * b) / 100}`)
}

    restart = input.question("Deseja fazer um novo calculo? (s/n)")

} while (restart === 's')