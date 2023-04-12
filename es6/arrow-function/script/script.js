/* 
let quadradoAntigo = function(x = 5) {
    return x * x
} 
*/

// se estiver recebendo apenas um parâmetro, não é necessário o ()

// let quadrado = x => x * x // return implícito

/*
let quadrado2 = (x, y) => {
    return x * x
}
*/

/*
let parOuImpar = x => {
    if (x % 2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}
*/

let parOuImpar = x => x % 2 === 0 ? 'Par' : 'Ímpar'

document.write(parOuImpar(3))