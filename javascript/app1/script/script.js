var clicouResultado = false

function calcular(tipo, valor) {
    if (tipo == 'acao') {
        clicouResultado = false

        if (valor == 'c') {
            // apagar tudo
            document.querySelector('#resultado').value = ''

        } else if (valor === '=') {
            // mostrar resultado
            var valorCampo = document.querySelector('#resultado').value
            valorCampo = valorCampo.toString().replace(/^0+/, '');
            document.querySelector('#resultado').value = eval(valorCampo)
            clicouResultado = true

        } else if (valor === '<') {
            // apagar último caractere
            var valorCampo = document.querySelector('#resultado').value
            document.querySelector('#resultado').value = valorCampo.slice(0, -1)

        } else {
            // adicionar operadores
            document.querySelector('#resultado').value += valor
        }

    } else if (tipo == 'valor') {
        // apagar resultado automaticamente
        if (clicouResultado == true) {
            document.querySelector('#resultado').value = ''
            clicouResultado = false
        }

        // adicionar números
        document.querySelector('#resultado').value += valor

    }
}