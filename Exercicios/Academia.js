/**
 * *Aplicativo - calculadora de saúde
 * @author Erica Viana
 */

// Importar a biblioteca read-linesync e a biblioteca colors
const input = require('readline-sync')
const colors = require('colors')

// Variáveis - O algoritmo
let nome, idade, peso, altura, fcm, imc, consumo

// FCM: Frequência cardíaca máxima
// IMC: Índice de massa corporal

// Limpar a tela antes de uma nova entrada
console.clear()

// Exibição do Banner
console.log(" _                _ _               _            _       _                       ")
console.log("| |              | | |             | |          | |     | |                      ")
console.log("| |__   ___  __ _| | |_    ___ __ _| | ___ _   _| | __ _| |_ ___  _ __           ")
console.log("| '_ \\ / _ \\/ _` | | __|  / __/ _` | |/ __| | | | |/ _` | __/ _ \\| '__|       ")
console.log("| | | |  __/ (_| | | |_  | (_| (_| | | (__| |_| | | (_| | || (_) | |             ")
console.log("|_| |_|\\___|\\__,_|_|\\__|  \\___\\__,_|_|\\___|\\__,_|_|\\__,_|\\__\\___/|_|   ")
console.log("")

// Entrada - Atribuir valores as variáveis
nome = input.question("Digite o seu nome: ")
idade = Number(input.question("Digite a sua idade: "))
peso = Number(input.question("Digite o seu peso (em kg): "))
altura = Number(input.question("Digite a sua altura (em metros): "))

// Processamento - Fórmula para cálculo do código
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)
consumo = peso * 0.035 // 35 ml de água por cada kg

// Saída - Resultado do processamento
console.log("Ficha do aluno")
console.log("_____________________")
console.log(" ")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`FCM (Frequência cardíaca máxima): ${fcm}`)
console.log(`IMC (Índice de massa corporal): ${imc.toFixed(2)}`)

// Variáveis IMC - Peso, Altura e IMC
// Entrada - Peso, Altura
// Processamento - "IMC = peso (altura * altura)"
// Saída - IMC
// .toFixed() - Limita os caracteres numéricos às casas decimais que estão entre o ()

// Tabela do IMC
if (imc < 18.5) {
    console.log("Classificação do IMC: Abaixo do peso".cyan)
  } else if (imc < 25) {
    console.log("Classificação do IMC: Peso normal".green)
  } else if (imc < 30) {
    console.log("Classificação do IMC: Sobrepeso".yellow)
  } else if (imc < 35) {
    console.log("Classificação do IMC: Obesidade grau 1".magenta)
  } else if (imc < 40) {
    console.log("Classificação do IMC: Obesidade grau 2".red)
  } else {
    console.log("Classificação do IMC: Obesidade grau 3 (mórbida)".bgRed)
  }

// Consumo de água diário
console.log(`Consumo diário de água: ${consumo.toFixed(3)} litros de água`)