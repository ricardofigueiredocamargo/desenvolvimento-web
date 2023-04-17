class Produto {
    constructor(descricao, preco) {
        this.descricao = descricao
        this.preco = preco
    }

    verDescricao() {
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }
}

let produto = new Produto('Notebook')