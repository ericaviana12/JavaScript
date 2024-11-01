/**
 * Sintaxe básica da linguagem JavaScript
 * @author Erica Viana
 */

// Limpar a tela do console
console.clear()

// JS - Sentença (No JS não há necessidade de escrever em linha o código, mas com separação por sentença)
// ; (ponto e vírgula) - opcional ao final da frase
console.log("Hello World")

// Variáveis
let nome = "Erica Viana"
let idade = 31
let altura = 1.57 // O ponto é usado para casas decimais

// Identificando tipos de variáveis
console.log(typeof(nome)) // Typeof() é usado para identificar o tipo de variável - incluir qual variável será verificada
console.log(typeof(idade))
console.log(typeof(altura))

// Identificando variáveis inteiras e não inteiras
console.log(Number.isInteger(idade)) // Number.isInteger() é usado para identificar variáveis numéricas, se são números inteiros ou não inteiros - incluir qual variável será verificada
console.log(Number.isInteger(altura))

// Concatenação (Unir textos e variáveis)
console.log(`Nome: ${nome}`) // `` (crase)
console.log("Nome: " + nome) // "" + (apóstrofo com o texto e símbolo da soma antes da variável) - não recomendado

// Arredondamento - Limita os caracteres numéricos às casas decimais que estão entre o ()
let media = 5.789
console.log(`Média: ${media.toFixed(1)}`) // .toFixed(1) - Limita os caracteres numéricos à 1 casa decimal

// Particularidades do JavaScript
console.log(10/0) // Se dividir qualquer número por 0 não para a execução, logo exibe o resultado "Infinity (Infinito)"
console.log(0.5 + 0.5)
console.log(0.1 + 0.2) // Quando trabalha números no dódigo, o JS contabiliza como alta precisão
console.log("3" + 2) // Exibe 32, pois faz concatenação da string "3" com o número "2"
console.log("3"-2) //O JS efetua a conta, mesmo se tratando de concatenação, por ser possível calcular
console.log("3x"-2) // O JS não consegue efetuar a operação matemática

NaN // Not a Number (Não é número) - Quando o JS não consegue efetuar o cálculo
