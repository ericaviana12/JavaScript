/** 
 * Estrutura de dados - objetos
 * @author Erica Viana
 */

console.clear()

const funcionario1 = {} // semrpe que tiver chaves é objeto
console.log(typeof (funcionario1))
//adcionar dados a estrutura
funcionario1.nome = "Erica"
funcionario1.cargo = "Estudante"
funcionario1.email = "erica.viana.soares@gmail.com"
funcionario1.salario = 15000
funcionario1.insta = "@ericaviana"
// listar os dados da estrutura
console.log(funcionario1)
console.log(funcionario1.cargo)
//modificar os dados da estrutura
funcionario1.nome = "Erica Viana"
console.log(funcionario1)
// excluir dados da estrutura
delete funcionario1.insta
console.log(funcionario1)

const funcionario2 = {
    nome: "Viana Erica",
    cargo: "CEO",
    email: "vianaerica@gmail.com",
    salario: 500000
}

console.log(funcionario2)

const endereco1 = {
    logradouro: "Bat caverna",
    cidade: "Gothan City",
    estado: "Nova Jersey",
}

console.log(endereco1)


const funcionario3 = {
    nome: "Alfred Pennywort",
    cargo: "mordomo",
    email: "alfred@gmail.com",
    salario: 20000,
    ...endereco1

}

console.log(funcionario3)

const funcionario4 = {
    nome: "Tio Paulo",
    cargo: "Aposentado",
    email: "tio@gmail.com",
    salario: 1500,
    ...endereco1

}
console.log(funcionario4)

const funcionario5 = {
    nome: "Tony Stark",
    cargo: "Engenheiro",
    email: "tony@gmail.com",
    salario: 375000,
    armadura: {
        versao: "Mark II",
        ano: 2022,
        reator: "Arc 01"
    },
    suitUp: () => {
        console.log("👻")
    }

}
console.log(funcionario5)
console.log(funcionario5.cargo)
console.log(funcionario5.armadura.versao)
funcionario5.suitUp() //Executar oa função interna da estrutura