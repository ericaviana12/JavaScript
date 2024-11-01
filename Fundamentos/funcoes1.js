/**
 * Estudo das funções simples (sem parâmetro)
 * @author Erica Viana
 */

// Limpar a tela antes de uma nova entrada
console.clear()

// Função literal
// Inicializa a função independente da ordem da chamada da função
hello()

function hello() {
    console.log("Hello function")
}

console.log(typeof(hello))


// Função atribuída
// Funções atribuídas precisam ser criadas no início do código (antes da chamada da função)
const hello2 = function() { // Constante e variável aloca memória, precisa ser feita antes de ser chamada
    console.log("hello2 function") // Quando é atribuído a uma constante uma função, a constante vira uma função (como ser fosse uma variável)
}

hello2()
console.log(typeof(hello2))


// Arrow function (forma simplificada de criar uma função atribuída)
const hello3 = () => {
    console.log("hello3 function")
}

hello3()
console.log(typeof(hello3))


// Arrow function mais simplificada (linha de código para observação, porém pouco utilizada)
const hello4 = _ => console.log("hello4 function")

hello4()
console.log(typeof(hello4))
