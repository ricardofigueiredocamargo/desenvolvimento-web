// WHILE ------------------------------------
/*
var x = 1

document.write('Início <br>')

while (x <= 10) {

    x++

    if (x % 2 == 1) {
        continue
    }

    document.write(x + '<br>')
}

document.write('Fim <br>')
*/

// DO WHILE --------------------------------
/*
var x = 11

do {
    document.write(x + '<br>')
} while (x <= 10)
*/

// FOR ------------------------------------
/*
for (var x = 10; x >= 0; x--) {
    document.write(x + '<br>')
}
*/

// TABUADA ---------------------------------
/*
for (let y = 1; y <= 10; y++) {
    for (let x = 1; x <= 10; x++) {
        document.write(`${y} x ${x} = ${y*x} <br>`)
    }
    document.write('<br>')
}
*/

// FOR IN ----------------------------------
/*
var listaConvidados = []

listaConvidados['a'] = 'Jorge'
listaConvidados[10] = 'Jamilton'
listaConvidados['zebra'] = 'José'
listaConvidados[-1] = 'Ana'
listaConvidados[true] = 'Maria'

for (let pos in listaConvidados) {
    document.write(listaConvidados[pos] + '<br>')
}
*/

// FOR EACH -----------------------------------

var listaFuncionarios = ['Viviane', 'Rosangela', 'Miguel', 'Lucas', 'Fernanda']

document.write(listaFuncionarios + '<br>')
document.write('<br>')
listaFuncionarios.forEach(function(valor, indice, array) {
    document.write(`valor: ${valor} | índice: ${indice} <br>`)
    if (valor == 'Lucas') {
        array[indice] = 'Um novo valor'
    }
})

document.write(listaFuncionarios[3])