/**
 * Atividade POO
 * @author Erica Viana
 */

console.clear()

// criando a classe modelo
class Carro {
    constructor(ano, cor) {
        this.ano = ano
        this.cor = cor
    }

    // métodos
    criarCarro() {
        console.log(`Carro criado: Ano ${this.ano}, Cor ${this.cor}`)
    }

    ligarCarro() {
        console.log("Carro ligado.")
    }

    acelerarCarro() {
        console.log("Carro acelerando...")
    }

    desligarCarro() {
        console.log("Carro desligado.")
    }
}

// Instanciar dois objetos Carro
const ferrari = new Carro(2020, "vermelho")
const fusca = new Carro(2022, "azul")

console.log("Ferrari")
ferrari.criarCarro()
ferrari.ligarCarro()
ferrari.acelerarCarro()
ferrari.desligarCarro()

console.log("____________________")

console.log("Fusca")
fusca.criarCarro()
fusca.ligarCarro()
fusca.acelerarCarro()
fusca.desligarCarro()

// herança
class Aviao extends Carro {
    // atributos
    constructor(ano, cor, envergadura) {
        super(ano, cor)
        this.envergadura = envergadura
    }

    // métodos
    criarAviao() {
        console.log(`Avião criado: Ano ${this.ano}, Cor ${this.cor}, Envergadura ${this.envergadura} metros`)
    }

    aterizar() {
        console.log("Avião aterrizando na pista...")
    }

    acelerar() {
        console.log("Avião acelerando na pista...")
    }
}

console.log("____________________")

// Criar um objeto Aviao
const aviao = new Aviao(2023, "branco", 90)
aviao.criarAviao()
aviao.aterizar()
aviao.acelerar()
