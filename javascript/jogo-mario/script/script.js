const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const nuvem = document.querySelector('.nuvem')
const gameOver = document.querySelector('.game-over')
let pontos = 0
let tempo = 0

// ANIMAÇÃO PULAR
const jump = () => {

    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 700)

}

// VERIFICANDO SE PERDEU
const loop = setInterval(() => {

    const nuvemPosition = nuvem.offsetLeft
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (pipePosition <= 60 && pipePosition > 0 && marioPosition < 50) {

        clearInterval(loop)
        clearInterval(ganhaPontos)
        clearInterval(ganhaTempo)

        gameOver.style.display = 'flex'

        nuvem.style.animation = 'none'
        nuvem.style.left = `${nuvemPosition}px`

        mario.src = 'imagens/mario-game-over.png'
        mario.style.width = '50px'
        mario.style.marginLeft = '20px'
        mario.style.marginBottom = '-10px'
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`
    }
}, 10)

// GANHANDO PONTOS
document.querySelector('.pontos').innerHTML = pontos
const ganhaPontos = setInterval(() => {
    pontos++
    document.querySelector('.pontos').innerHTML = pontos
}, 1500)

// CONTANDO TEMPO
document.querySelector('.tempo').innerHTML = tempo
const ganhaTempo = setInterval(() => {
    tempo++
    document.querySelector('.tempo').innerHTML = tempo
}, 1000)

document.addEventListener('keydown', jump)