// um software de marcearia
// cadeira e sofá

/*
class Cadeira {
    constructor(qntePernas, giratoria, cor) {
        this.qntePernas = qntePernas
        this.giratoria = giratoria
        this.cor = cor
    }

    girar() {
        if (this.giratoria) {
            console.log('girou')
        } else {
            console.log('Cadeira não é giratória')
        }
    }

    verCor() {
        console.log(`cor da cadeira: ${this.cor}`)
    }
}

let cadeiras = []
cadeiras.push(new Cadeira(4, false, 'azul'))
cadeiras.push(new Cadeira(1, true, 'vermelha'))

console.log(cadeiras[0].verCor())
*/

class Sofa {
    constructor(cor, qnteLugares, reclinavel) {
        this.cor = cor
        this.qnteLugares = qnteLugares
        this.reclinavel = reclinavel
    }

    verCor() {
        console.log(`a cor deste sofá é ${this.cor}`)
    }
    
    verLugares() {
        console.log(`este sofá possui ${this.qnteLugares} lugares`)
    }

    reclinar() {
        if (this.reclinavel) {
            console.log('o sofá reclinou')
        } else {
            console.log('este sofá não é reclinável')
        }
    }
}

let sofas = []
sofas.push(new Sofa('vermelho', 3, true))
sofas.push(new Sofa('cinza', 2, false))

sofas[0].reclinar()
sofas[0].verLugares()
sofas[0].verCor()