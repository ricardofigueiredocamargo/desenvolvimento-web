var objetos = ['Cadeira', 'Impressora', 'Garfo']

function adicionar() {
    var campo = document.getElementById('itexto')
    var valor = campo.value
    valor = valor.charAt(0).toUpperCase() + valor.slice(1)

    if (valor == '') {
        window.alert('Informe um valor válido')
    } else {
        if (objetos.indexOf(valor) !== -1) {
            window.alert('Objeto já foi adicionado')
        } else { 
            objetos.push(valor)
            console.log(objetos)    
        }
    }

    campo.value = ''
    campo.focus()
}

function ordenar() {
    objetos.sort()
    console.log(objetos)
}