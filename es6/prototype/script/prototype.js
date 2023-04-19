// objeto literal 
let a1 = {
    cor: 'branco',
    modelo: 'Airbus a380',
    levantarVoo() { console.log('Levantar voo') }
}

// função construtora 
let AviaoF = function() {
    this.cor = 'azul'
    this.modelo = 'Boeing 787'
    this.levantarVoo = function() { console.log('Levantar voo') }
}

let a2 = new AviaoF()

// classe
class AviaoC {
    constructor(cor, modelo) {
        this.cor = 'vermelho'
        this.modelo = 'Embraer E-Jets'
    }

    levantarVoo() {
        console.log('Levantar voo')
    }
}

let a3 = new AviaoC()

/* console.log(a1)
console.log(a2)
console.log(a3) */