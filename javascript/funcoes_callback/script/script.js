function exibirArtigo(id, callbackSucesso, callbackErro) {
    // lógica: recuperar o id via requisição http
    if (id == 1) {
        callbackSucesso('Funções de callback em JS', 'Funções de callback são muito utilizadas')
    } else {
        callbackErro('Erro ao recuperar os dados')
    }
}

var callbackSucesso = function(titulo, descricao) {
    document.write('<h1>' + titulo + '</h1>')
    document.write('<hr>')
    document.write('<p>' + descricao + '</p>')
}

var callbackErro = function(erro) {
    document.write('<p>' + erro + '</p>')
}

exibirArtigo(1, callbackSucesso, callbackErro)

var x = Math.random().toFixed(0)
document.write(x)