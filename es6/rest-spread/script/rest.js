function soma(...param) {
    let resultado = 0

    console.log(param)
    
    param.forEach(n => resultado += n)

    return resultado
}

console.log(soma(3, 8, 5, 7, 5, 10))

function multiplicacao(m, ...p) {
    let resultado = 0

    p.forEach(v => resultado += m * v)

    return resultado
}

console.log(multiplicacao(5, 7, 12, 3, 49))