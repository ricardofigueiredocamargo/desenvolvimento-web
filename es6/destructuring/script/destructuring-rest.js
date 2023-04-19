/* let array = [10, 20, 30, 40]

let [a, ...resto] = array

console.log(a)
console.log(resto) */

let objeto = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}

let {a, ...z} = objeto

console.log(a)
console.log(z)