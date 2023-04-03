var bloco = document.query('bloco')
bloco.addEventListener('click', mudarCor)

function mudarCor() {
    if (bloco.style.background == 'grey') {
        bloco.style.background = 'red'
    } else {
        bloco.style.background = 'grey'
    }
}

function acao1() {
    window.alert('evento disparado')
}

var texto = document.getElementById('itexto')
texto.addEventListener('focus', recebeFoco)
texto.addEventListener('blur', perdeFoco)

function recebeFoco() {
    texto.style.background = 'yellow'
}

function perdeFoco() {
    if (texto.value.length < 3) {
        texto.style.background = 'red'
    } else {
        texto.style.background = 'green'
    }
}