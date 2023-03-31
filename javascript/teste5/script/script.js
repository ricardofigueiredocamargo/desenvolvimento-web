let valores = []
let analise = document.getElementById('analise')

function adicionar() {
    let numero = document.getElementById('inumero')
    let lista = document.getElementById('ilista')
    let repetido = false
    let n = Number(numero.value)

    // para valores repetidos
    for (let pos in valores) {
        if (valores[pos] == n) {
            repetido = true
        }
    }

    if (numero.value.length == 0 || n < 1 || n > 100 || repetido == true) {
        window.alert('ERRO! Número inválido ou repetido.')
    } else {
        analise.innerHTML = ''
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        lista.appendChild(item)
        valores.push(n)
    }

    numero.value = ''
    numero.focus()
}

function finalizar() {
    let frases = []

    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        // total de números 
        if (valores.length == 1) {
            var totalFrase = `Ao todo, temos ${valores.length} número cadastrado`
        } else {
            var totalFrase = `Ao todo, temos ${valores.length} números cadastrados`
        }

        // maior, menor e soma 
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for (let pos in valores) {
            if (valores[pos] > maior) {
                maior = valores[pos]
            }

            if (valores[pos] < menor) {
                menor = valores[pos]
            }

            soma += valores[pos]
        }

        // media 
        let media = soma / valores.length

        // frases 
        let maiorFrase = `O maior valor informado foi ${maior}`       
        let menorFrase = `O menor valor informado foi ${menor}`
        let somaFrase = `Somando todos os valores, temos ${soma}`
        let mediaFrase = `A média dos valores digitados é ${media}`

        // adicionando frases ao HTML
        frases.push(totalFrase, maiorFrase, menorFrase, somaFrase, mediaFrase)

        for (let pos in frases) {
            analise.innerHTML += `<p>` + frases[pos] + `</p>`
        }
    }
}