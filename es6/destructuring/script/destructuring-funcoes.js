//array 
let array = [10, 20, 30, 40]

function teste([a, , b, c, d = 100]) {
    console.log(a, b, c, d)
}

teste(array)

//objetos 
let objeto = {
    a: 'A',
    b: 'B',
    c: 'C',
    d: 'D',
    e: {
        detalhe: 'aaaaaaaaa',
        outroDetalhe: 'bbbbbbb'
    }
}

function teste2({a, b, c, d, e: {detalhe: det, outroDetalhe: ouDet}}) {
    console.log(det, ouDet)
}

teste2(objeto)