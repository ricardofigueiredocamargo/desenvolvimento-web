function mudarClasse() {
    var mensagem = document.getElementById('mensagem')

    if (mensagem.classList.contains('estilo2')) {
        mensagem.classList.remove('estilo2')
    } else {
        mensagem.classList.add('estilo2')
    }
}