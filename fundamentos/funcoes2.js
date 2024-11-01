/**
 * Estudo das funções com parâmetros e retorno
 * @author Erica Viana
 */

// Limpar a tela antes de uma nova entrada
console.clear()


// Função literal (não atribuída) - Inicializa a função independente da ordem da chamada da função
function somar(a, b) {
    return (console.log(a + b))
}

somar(5, 2)
console.log(typeof(somar))


// Função atribuída - precisa ser criada no início do código (antes da chamada da função)
const somarA = function(a, b) {
    return (console.log(a + b))
}

somarA(5, 3)
console.log(typeof(somarA))


// Arrow function (forma simplificada de criar uma função atribuída)
const somarAF = (a, b) => {
    return (console.log(a + b))
}

somarAF(2, 2)
console.log(typeof(somarAF))


// Arrow function mais simplificada (linha de código para observação, porém pouco utilizada)
const somarAFS = (a, b) => console.log(a + b)

somarAFS(3, 9)
console.log(typeof(somarAF))
