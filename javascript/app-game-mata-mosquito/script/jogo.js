var altura = 0
var largura = 0
var numeroVida = 1
var tempo = 15

// ------------ DEFININDO DIFICULDADE -------------
var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    criaMosquitoTempo = 1500
} else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000
} else if ( nivel === 'chucknorris') {
    criaMosquitoTempo = 800
}

// ------------ AJUSTANDO TAMANHO -------------
function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
}

ajustaTamanhoPalcoJogo()

// ------------ CRONOMETRO -------------
var cronometro = setInterval(function() {
    tempo--
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(jogoIniciado)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('tempo').innerHTML = tempo
    }
    
}, 1000)

// ------------ POSIÇÃO RANDÔMICA -------------
function posicaoRandomica() {
    // remover mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if (numeroVida > 3) {
            clearInterval(cronometro)
            clearInterval(jogoIniciado)
            window.location.href = 'game-over.html'
        } else {
            document.getElementById('v' + numeroVida).src = 'imagens/coracao_vazio.png'
            numeroVida++
        }
    }

    // criar posição randômica
    var posicaoX = Math.floor(Math.random() * largura) - 100
    var posicaoY = Math.floor(Math.random() * altura) - 100

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    // criar classe randômica
    var classeMosquito = 'mosquito'
    do {
        var numeroMosquito = Math.floor(Math.random() * 4)
    } while (numeroMosquito == 0)
    classeMosquito += numeroMosquito

    //criar lado randômico
    var lado = 'lado'
    do {
        var numeroLado = Math.floor(Math.random() * 3)
    } while (numeroLado == 0)
    lado += numeroLado

    // criar elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.classList.add(classeMosquito, lado)
    mosquito.style.position = 'absolute'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.left = posicaoX + 'px'
    mosquito.id = 'mosquito'
    mosquito.addEventListener('click', matou)

    document.body.appendChild(mosquito)
}

// ------------ FUNCTION MATOU -------------
function matou() {
    this.remove()
}

