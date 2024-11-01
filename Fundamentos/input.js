/**
 * Input de dados via Terminal
 * Uso do pacote read-line sync
 * @author Erica Viana
 */

// Importar o pacote
const input = require('readline-sync')

let nome

console.clear()

nome = input.question("Digite o seu nome: ") // Uso da biblioteca para escrever no console o item entre () e aguarda você digitar a resposta
console.log(`Hello ${nome}`) // Após digitar a resposta da pergunta feita na linha anterior, aparece a resposta com a concatenação que está entre () do "Hello" + a variável "nome"
