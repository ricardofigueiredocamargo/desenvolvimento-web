let produto = {
    descricao: 'notebook',
    preco: 1800,
    detalhes: {
        fabricante: 'ABC',
        modelo: 'XYZ'
    }
}

// let {descricao, preco} = produto

// let {descricao: d, preco: p, desconto = 'nao tem'} = produto
 
let {detalhes: {fabricante: f, modelo: m}} = produto

console.log(f, m)