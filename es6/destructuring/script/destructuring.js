// operador de desestruturação 

let frutas = ['Abacaxi', 'Uva', 'Pera', 'Mamão']

/* 
let a = frutas[0]
let b = frutas[1]
let c = frutas[3] 
*/

let [a, b, , c] = frutas //pular um índice

console.log(a, b, c)

let [l = 'Banana', m, n, o, p = 'Banana'] = frutas //valor default

console.log(l, m, n, o, p)

//-------------------------------------------------------------

let coisas = [[...frutas], ['José', 'Maria']]

let [[, , y], [, x]] = coisas

console.log(x, y)