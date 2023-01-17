let nome = document.querySelector('input#inome')
let idade = document.querySelector('input#iidade')
let email = document.querySelector('input#iemail')
let senha = document.querySelector('input#isenha')
let confirmeSenha = document.querySelector('input#iconfirm')

function apagar() {
    nome.value = ''
    idade.value = ''
    email.value = ''
    senha.value = ''
    confirmeSenha.value = ''
}

