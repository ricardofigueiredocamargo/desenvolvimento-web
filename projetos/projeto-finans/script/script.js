var titulo = document.getElementById('titulo')

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        titulo.classList.add('display-4')
    } else {
        titulo.classList.remove('display-4')
    }
}