var exibirSaudacao = function(nome) {
    nome = nome.split(' ')
    
    nome = nome.map((word) => {
        return word[0].toUpperCase() + word.slice(1)
    }).join(' ')

    document.write(`Olá, ${nome}! Tudo bem?`)
}

exibirSaudacao(prompt('Qual o seu nome?'))
