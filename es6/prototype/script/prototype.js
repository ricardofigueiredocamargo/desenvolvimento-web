class Aviao {
    constructor() {
        this.cor = 'branco'
        this.modelo = 'Airbus a380'
    }

    levantarVoo() {
        console.log('Levantar voo')
    }
}

let a1 = {
    cor: 'branco',
    modelo: 'Airbus a380',
    levantarVoo() { console.log('Levantar voo') }
}