let assinatura = {
    idCliente: 1000,
    descricao: 'Acesso a internet',
    status() {
        console.log('Ativo')
    }
}

console.log(assinatura.descricao)

let y = assinatura

y.idCliente = 2000

console.log(assinatura.idCliente)
console.log(y.idCliente)