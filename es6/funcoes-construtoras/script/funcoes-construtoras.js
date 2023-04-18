let Carro = function() {
    this.cor = 'amarelo'
    this.modelo = 'Chevet'
    this.velocidadeAtual = 0
    var velocidadeMaxima = 180
    var quilometrosRodados = 0

    this.acelerar = function() {
        let velocidade = this.getVelocidadeAtual() + 50
        if (velocidade > velocidadeMaxima) {
            velocidade = velocidadeMaxima
        }
        this.setVelocidadeAtual(velocidade)

        setQuilometrosRodados(0.07)
        console.log(quilometrosRodados)
    }

    this.getVelocidadeAtual = function() {
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function(velocidadeAtual) {
        this.velocidadeAtual = velocidadeAtual
    }

    var setQuilometrosRodados = function(q) {
        quilometrosRodados += q
    }

}

let carro = new Carro()

console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()

console.log(carro)