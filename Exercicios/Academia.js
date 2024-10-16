/**
 * *Ficha de um aluno da cademia
 * @author Erica Viana
 */

// Variáveis - O algoritmo
let nome
let idade
let peso
let altura
let vip
let fcm // Frequência cardíaca máxima
let imc // Índice de massa corporal

// Entrada - Atribuir valores as variáveis
console.clear()
nome = "Erica Viana"
idade = 31
peso = 58
altura = 1.57
vip = true

// Processamento - Fórmula para cálculo do código
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)

// Saída - Resultado do processamento
console.log("Ficha do aluno")
console.log("_____________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`Vip: ${vip}`)
console.log(`FCM: ${fcm}`)
console.log(`IMC ${imc.toFixed(2)}`)

// Variáveis IMC - Peso, Altura e IMC
// Entrada - Peso, Altura
// Processamento - "IMC = peso (altura * altura)"
// Saída - IMC
// .toFixed(2) - Limita os caracteres numéricos às casas decimais que estão entre o ()

if (imc < 18.5) {
    console.log("Abaixo do peso")
  } else if (imc < 25) {
    console.log("Peso normal")
  } else if (imc < 30) {
    console.log("Sobrepeso")
  } else if (imc < 35) {
    console.log("Obesidade grau 1")
  } else if (imc < 40) {
    console.log("Obesidade grau 2")
  } else {
    console.log("Obesidade grau 3 (mórbida)")
  }