class Despesa {
    constructor(ano, mes, dia, tipo, descricao, valor) {
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }

    validarDados() {
        for (let i in this) {
            if (this[i] === ''  || this[i] === undefined || this[i] === null) {
                return false
            } 
        } 

        return true
    }
}

class Bd {
    constructor() {
        this.id = localStorage.getItem('id')

        if (this.id === null) {
            localStorage.setItem('id', 0)
        } 
    }

    gravar(d) {
        this.id++
        localStorage.setItem(this.id, JSON.stringify(d))
        localStorage.setItem('id', this.id)
    }
}

let bd = new Bd()

function cadastrarDespesa() {
    let ano = document.querySelector('#iano')
    let mes = document.querySelector('#imes')
    let dia = document.querySelector('#idia')
    let tipo = document.querySelector('#itipo')
    let descricao = document.querySelector('#idesc')
    let valor = document.querySelector('#ivalor')

    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
    )

    if (despesa.validarDados()) {
        bd.gravar(despesa)
        $('#sucessoGravacao').modal('show')
    } else {
        $('#erroGravacao').modal('show')
    }
    
}



