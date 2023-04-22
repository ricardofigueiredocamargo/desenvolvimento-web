// CLASSES ---------------------------------------------------
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

    recuperarTodosRegistros() {
        for (let i = 1; i <= this.id; i++) {
            let despesa = JSON.parse(localStorage.getItem(i))

            if (despesa !== null) {
                despesa.id = i
                todasDespesas.push(despesa)
            }
        }
    }

    removerItem(id) {
        localStorage.removeItem(id)
    }
}

class Modal {
    constructor() {
        this.titulo = document.querySelector('#titulo-modal')
        this.descricao = document.querySelector('#descricao-modal')
        this.botao = document.querySelector('#btn-modal')
    }

    erroGravacao() {
        this.titulo.classList.add('text-danger')
        this.botao.classList.add('btn-danger')

        this.titulo.innerHTML = `Erro na gravação`
        this.descricao.innerHTML = `Existem campos obrigatórios que não foram preenchidos!`
        this.botao.innerHTML = `Voltar e Corrigir`
    }

    sucessoGravacao() {
        this.titulo.classList.add('text-success')
        this.botao.classList.add('btn-success')
        this.botao.addEventListener('click', limparDados)

        this.titulo.innerHTML = `Registro inserido com sucesso`
        this.descricao.innerHTML = `Despesa foi cadastrada com sucesso!`
        this.botao.innerHTML = `Voltar`
    }

    removerDespesa() {
        this.titulo.classList.add('text-warning')
        this.botao.classList.add('btn-warning')
        this.botao.addEventListener('click', recarregarPagina)

        this.titulo.innerHTML = `Despesa removida`
        this.descricao.innerHTML = `A sua despesa foi removida com sucesso!`
        this.botao.innerHTML = `Voltar`
    }

    removerClasses() {
        if (this.titulo.classList.contains('text-danger')) {
            this.titulo.classList.remove('text-danger')
            this.botao.classList.remove('btn-danger')
        }

        if (this.titulo.classList.contains('text-success')) {
            this.titulo.classList.remove('text-success')
            this.botao.classList.remove('btn-success')
            this.botao.removeEventListener('click', limparDados)
        }

        if (this.titulo.classList.contains('text-warning')) {
            this.titulo.classList.remove('text-warning')
            this.botao.classList.remove('btn-warning')
            this.botao.removeEventListener('click', recarregarPagina)
        }
    }
}

// VARIÁVEIS ---------------------------------------
let bd = new Bd()

let modal = new Modal()

let todasDespesas = []

let listaDespesas = document.querySelector('#listaDespesas')

let valoresTotais = document.querySelector('#valores-totais')

let valorTotalFiltrado = document.querySelector('#valor-total-filtrado')

let filtroSelecionado = document.querySelector('#filtro-selecionado')

let valorFiltrado = document.querySelector('#valor-filtrado')

// FUNÇÕES PRINCIPAIS -----------------------------------------
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

    modal.removerClasses()

    if (despesa.validarDados()) {
        bd.gravar(despesa)
        modal.sucessoGravacao()
        $('#modal').modal('show')
    } else {
        modal.erroGravacao()
        $('#modal').modal('show')
    }
}

function mostrarListaDespesas() {
    bd.recuperarTodosRegistros()

    carregaListaDespesas(todasDespesas)
}

function pesquisarDespesa() {
    let ano = document.querySelector('#iano').value
    let mes = document.querySelector('#imes').value
    let dia = document.querySelector('#idia').value
    let tipo = document.querySelector('#itipo').value
    let descricao = document.querySelector('#idesc').value
    let valor = document.querySelector('#ivalor').value

    listaDespesas.innerHTML = ''

    let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)

    let despesasFiltradas = pesquisar(despesa)

    carregaListaDespesas(despesasFiltradas)
}

function carregaListaDespesas(lista) {
    lista.forEach((d) => {
        let diaAjustado = ajustarDiaDespesa(d.dia)
        let mesAjustado = ajustarDiaDespesa(d.mes)
        let tipoAjustado = ajustarTipoDespesa(d.tipo)
        let valorAjustado = ajustarValorDespesa(d.valor)

        let linha = listaDespesas.insertRow()
        linha.insertCell(0).innerHTML = `${diaAjustado}/${mesAjustado}/${d.ano}`
        linha.insertCell(1).innerHTML = tipoAjustado
        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = valorAjustado

        let btn = document.createElement('button')
        btn.className = 'btn btn-danger btn-sm'
        btn.innerHTML = `<i class="fas fa-times"></i>`
        linha.insertCell(4).appendChild(btn)
        btn.onclick = () => {
            bd.removerItem(d.id)
            modal.removerDespesa()
            $('#modal').modal('show')
        }
    })
}

function carregaValoresTotais() {
    bd.recuperarTodosRegistros()

    let valorTotal = 0

    todasDespesas.forEach((d) => {
        valorTotal += Number(d.valor)
    })

    valorTotal = ajustarValorDespesa(valorTotal)

    valoresTotais.innerHTML = valorTotal
}

function carregaValoresTotaisFiltrados() {
    let ano = document.querySelector('#iano').value
    let tipo = document.querySelector('#itipo').value
    let mes = ''
    let dia = ''
    let descricao = ''
    let valor = ''

    if (ano == '' && tipo == '') {
        modal.removerClasses()
        modal.erroGravacao()
        $('#modal').modal('show')
    } else {
        let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)

        let despesasFiltradas = pesquisar(despesa)

        let valorTotal = 0

        despesasFiltradas.forEach((d) => {
            valorTotal += Number(d.valor)
        })

        valorTotal = ajustarValorDespesa(valorTotal)
        tipo = ajustarTipoDespesa(tipo)

        if (tipo == '') {
            filtroSelecionado.innerHTML = `em ${ano}`
        } else if (ano == '') {
            filtroSelecionado.innerHTML = `em ${tipo}`
        } else {
            filtroSelecionado.innerHTML = `em ${tipo} em ${ano}`
        }

        valorFiltrado.innerHTML = `${valorTotal}`

        if (valorTotalFiltrado.classList.contains('d-none')) {
            valorTotalFiltrado.classList.remove('d-none')
        }
    }
}

// FUNÇÕES SECUNDÁRIAS -----------------------------------------
function pesquisar(despesa) {
    let despesasFiltradas = todasDespesas

    //ano
    if (despesa.ano !== '') {
        despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.ano)
    }

    //mes
    if (despesa.mes !== '') {
        despesasFiltradas = despesasFiltradas.filter(d => d.mes == despesa.mes)
    }

    //dia
    if (despesa.dia !== '') {
        despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesa.dia)
    }

    //tipo
    if (despesa.tipo !== '') {
        despesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesa.tipo)
    }

    //descricao
    if (despesa.descricao !== '') {
        despesasFiltradas = despesasFiltradas.filter(d => d.descricao == despesa.descricao)
    }

    //valor
    if (despesa.valor !== '') {
        despesasFiltradas = despesasFiltradas.filter(d => d.valor == despesa.valor)
    }

    return despesasFiltradas
}

let limparDados = () => {
    document.querySelector('#iano').value = ''
    document.querySelector('#imes').value = ''
    document.querySelector('#idia').value = ''
    document.querySelector('#itipo').value = ''
    document.querySelector('#idesc').value = ''
    document.querySelector('#ivalor').value = ''
}

let recarregarPagina = () => {
    modal.removerClasses()
    window.location.reload()
}

function ajustarDiaDespesa(dia) {
    if (dia < 10) {
        dia = 0 + dia
    }
    return dia
}

function ajustarMesDespesa(mes) {
    if (mes < 10) {
        mes = 0 + mes
    }
    return mes
}

function ajustarTipoDespesa(tipo) {
    switch (tipo) {
        case '1':
            tipo = 'Alimentação'
            break
        case '2':
            tipo = 'Educação'
            break
        case '3':
            tipo = 'Lazer'
            break
        case '4': 
            tipo = 'Saúde'
            break
        case '5':
            tipo = 'Transporte'
            break                
    }
    return tipo
}

function ajustarValorDespesa(valor) {
    valor = Number(valor)
    valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    return valor
}

