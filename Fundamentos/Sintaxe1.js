/**
 * Sintaxe básica da linguagem JavaScript
 * @author Erica Viana
 */

// Limpar a tela do console
console.clear()

// JS - Sentença (No JS não há necessidade de escrever em linha o código, mas com separação por sentença)
// ; (ponto e vírgula) - opcional ao final da frase
console.log("Hello World")

// Concatenação (Unir textos e variáveis)
let nome = "Erica Viana"
console.log(`Nome: ${nome}`) // `` (crase)
console.log("Nome: " + nome) // "" + (apóstrofo com o texto e símbolo da soma antes da variável) - não recomendado

// Arredondamento - Limita os caracteres numéricos às casas decimais que estão entre o ()
let media = 5.789
console.log(`Média: ${media.toFixed(1)}`) // .toFixed(1) - Limita os caracteres numéricos à 1 casa decimal
