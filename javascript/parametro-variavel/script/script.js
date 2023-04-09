/*
function soma(a, b) {
    return a + b
}

console.log(soma(7, 7))
console.log(soma(7, 7, 9, 15))
console.log(soma(7))
console.log(soma())
*/

function soma() {
    var resultado = 0
    for (let i in arguments) {
        resultado += arguments[i]
    }
    return resultado
}

console.log(soma(7, 5, 3.2, 0.8, 'Texto'))
