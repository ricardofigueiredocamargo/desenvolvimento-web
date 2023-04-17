const resumo = document.querySelector('#resumo')

let capitalizeName = (nome) => {
    nome = nome.split(' ')
    for (let pos in nome) {
        nome[pos] = nome[pos].charAt(0).toUpperCase() + nome[pos].slice(1)
    }
    nome = nome.join(' ')
    return nome
}

function avancar() {
    let nome = document.querySelector('#inome').value
    let idade = document.querySelector('#iidade').value
    let sexo = document.querySelector('#isexo').value
    let profissao = document.querySelector('#iprofissao').value
    
    if (nome == '' || idade == '' || sexo == '' || profissao == '') {
        window.alert('Preencha todos os campos antes de continuar!')
    } else {
        nome = capitalizeName(nome)

        let objeto = {
            nome,
            idade,
            sexo,
            profissao,
            exibirResumo() {
                resumo.innerHTML = `${this.nome}, ${this.idade} anos, ${this.sexo} é ${this.profissao}`
            }
        }

        objeto.exibirResumo()
    }
}
