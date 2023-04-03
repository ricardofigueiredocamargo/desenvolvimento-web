var letra = document.getElementById('iletras')
var num = document.getElementById('inum')

function verificar() {
    var caracter = document.getElementById('icaracter').value

    document.getElementById('icaracter').value = ''

    // limpar espaços em branco nas extremidades
    caracter.trim()

    switch (caracter) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            num.value = caracter
            break     
        default:
            letra.value = caracter
            break
    }
}


