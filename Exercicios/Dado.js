/**
 * Exemplo de uso do método para gerar números aleatórios e uso da estrutura do-while
 * Jogo do dado
 * @author Erica Viana
 */

// Importar a biblioteca readline-sync
const input = require('readline-sync')

// Variáveis - O algoritmo
let face, opcao

do {

    // Limpar a tela antes de uma nova entrada
    console.clear()

    // Exibir o texto entre "" (aspas)
    console.log("Jogo do dado")

    // Entrada - Atribuir valores às variáveis
    input.question("Pressione a tecla [Enter] para jogar o dado")

    // Sorteio da face de um dado
    // Math - Classe matemática
    // Floor() - Conversão para números inteiros
    // Random() - Gerador de números aleatórios

    face = Math.floor(Math.random() * 6 + 1) // O +1 é para exibir o número de forma aleatória e não considerar o número 0, pois no dado não temos o número 0, somente do 1 ao 6
    console.log(`Face do dado: ${face}`)

    opcao = input.question("Deseja jogar o dado novamente? (s/n)")

} while (opcao === 's')
