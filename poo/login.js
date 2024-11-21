/**
 * Fundamentos da POO
 * Encapsulamento (segurança)
 * @author Erica Viana
 */

console.clear()

class User {
    // Atributos
    constructor(login, senha) {
        this.login = login
        // Encapsulamento
        let _senha = senha // O _ (underline) que faz o encapsulamento da variável - enjaula a variável
        this.getSenha = () => _senha // Leitura
        this.setSenha = (novaSenha) => _senha = novaSenha // Escrita
    }
    // Método
    logar() {
        console.log("____________________")
        console.log(`Usuário: ${this.login}`)
        console.log(`Senha: ${this.getSenha()}`)
        if (this.login === 'admin' && this.getSenha() === '123@senac') {
            console.log("Usuário autenticado")
        } else {
            console.log("Usuário e/ou senha inválido(s)")
        }
    }
}

/** Sistema **/
// Criando um novo objeto

const user1 = new User("admin", "1234")
user1.logar()
user1.setSenha("123@senac")
user1.logar()
