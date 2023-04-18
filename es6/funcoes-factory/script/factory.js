// lógica
//requisição http
// resposta http
/* let Bicicleta1 = {
    cor: 'branca',
    marcha: 'única',
    aro: 12,
    pedalar() { console.log('Método pedalar executado') }
}

// lógica
//requisição http
// resposta http
let Bicicleta2 = {
    cor: 'vermelha',
    marcha: 18,
    aro: 16,
    pedalar() { console.log('Método pedalar executado') }
}


console.log(Bicicleta1)
console.log(Bicicleta2) */

let BicicletaFactory = function(cor, marcha, aro) {
    // lógica
    //requisição http
    // resposta http
    return {
        cor,
        marcha,
        aro,
        pedalar() { console.log('Método pedalar executado')  }
    }
}

let Bicicleta3 = BicicletaFactory('azul', 'única', 13)

console.log(Bicicleta3)
console.log(`cor: ${Bicicleta3.cor}`)

let Bicicleta4 = BicicletaFactory('verde', 23, 53)

console.log(Bicicleta4)
console.log(`cor: ${Bicicleta4.cor}`)