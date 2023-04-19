Object.prototype.attr50 = 'z' // atributo global

let animal = {
    attr1: 'a'
}

let vertebrado = {
    __proto__: animal,
    attr2: 'b'
}

let ave = {
    __proto__: vertebrado,
    attr50: 'x',
    atrr3: 'c'
}

console.log(ave.attr1, animal.attr50)