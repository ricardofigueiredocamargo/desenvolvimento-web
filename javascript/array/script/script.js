// ARRAY MULTIDIMENSIONAL
/*
var listaCoisas = []

listaCoisas['frutas'] = ['Banana', 'Maçã', 'Morango', 'Uva']
listaCoisas['pessoas'] = []

listaCoisas['pessoas']['a'] = 'João'
listaCoisas['pessoas']['b'] = 'José'
listaCoisas['pessoas']['c'] = 'Maria'

document.write(listaCoisas['pessoas']['b'])
console.log(listaCoisas['frutas'][3])
*/

// MÉTODOS DE INCLUSÃO E EXCLUSÃO DE ELEMENTOS
/*
var listaCoisas = []

listaCoisas['frutas'] = ['Maçã']
listaCoisas['pessoas'] = ['José', 'João', 'Maria']

listaCoisas['frutas'].unshift('Banana')
listaCoisas['frutas'].push('Morango')
listaCoisas['frutas'].push('Uva')

listaCoisas['pessoas'].shift()
listaCoisas['pessoas'].pop()

console.log(listaCoisas)
*/

// MÉTODOS DE PESQUISA
/*
var listaFrutas = ['Banana', 'Maçã', 'Morango', 'Uva']

var pesquisa = listaFrutas.indexOf('Banana')

if (pesquisa == -1) {
    console.log('Elemento não existe')
} else {
    console.log('Elemento existe e está na posição ' + pesquisa)
}
*/

// ORDENAÇÃO DE ARRAYS
var listaFrutas = ['Maçã', 'Uva', 'Banana', 'Morango']
var listaNumeros = [12, 40, 3, 7, 19, 1]

console.log(listaFrutas.sort())

// não colocar () para que a função não seja executada antes, ela precisa ser executada dentro do método .sort()
console.log(listaNumeros.sort(ordenaNumeros))

function ordenaNumeros(a, b) {
    return a - b
    // < 0 = a ordenado antes de b
    // > 0 = b ordenado antes de a
    // == ordem é mantida
}


