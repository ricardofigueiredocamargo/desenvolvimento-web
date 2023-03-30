function calcular() {
    var num1 = Number(document.querySelector('#inum1').value)
    var num2 = Number(document.querySelector('#inum2').value)
    var operacao = document.querySelector('input[name="operacao"]:checked').value
    var resp = document.querySelector('#resp')

    if (num1 == '' || num2 == '') {
        window.alert('Erro! Preencha todos os campos para continuar!')
    } else {
        if (operacao == 'soma') {
            var result = num1 + num2
        } else {
            var result = num1 - num2
        }

        resp.innerHTML = `O resultado é: ${result}.`
    }
} 
