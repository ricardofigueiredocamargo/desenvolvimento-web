var perguntaNome = document.querySelector('#pergunta-nome')
var resp = document.querySelector('#resp')

var nome = null
var altura = null
var peso = null
var massa = null
var classificacao = null

function calculoMassa() {
    // nome 
    nome = document.querySelector('#inome').value
    nome = nome.split(' ')
    for (let pos in nome) {
        nome[pos] = nome[pos].charAt(0).toUpperCase() + nome[pos].slice(1)
    }
    nome = nome.join(' ')

    // altura
    altura = document.querySelector('#ialtura').value
    altura = Number(altura)

    // peso
    peso = document.querySelector('#ipeso').value
    peso = Number(peso)

    if (nome == '' || altura == '' || peso == '') {
        window.alert('Erro! Preencha todos os campos para prosseguir!')
    } else {
        altura = altura / 100
        massa = peso / (altura ** 2)

        if (massa < 16) {
            classificacao = 'Baixo peso muito grave'
        } else if (massa >= 16 && massa < 16.99) {
            classificacao = 'Baixo peso grave'
        } else if (massa >= 17 && massa < 18.49) {
            classificacao = 'Baixo peso'
        } else if (massa >= 18.50 && massa < 24.99) {
            classificacao = 'Peso normal'
        } else if (massa >= 25 && massa < 29.99) {
            classificacao = 'Sobrepeso'
        } else if (massa >= 30 && massa < 34.99) {
            classificacao = 'Obesidade grau I'
        } else if (massa >= 35 && massa < 39.99) {
            classificacao = 'Obesidade grau II'
        } else {
            classificacao = 'Obesidade grau III'
        }

        resp.innerHTML = `${nome} possui índice de massa corporal igual a ${massa.toFixed(2)}, sendo classificado como: ${classificacao}.`
    }
}