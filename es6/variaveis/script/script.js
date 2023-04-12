// 3 escopos: global, função e bloco

const SERIE = 'Friends'

{
    const SERIE = 'The Walking Dead'
    console.log('dentro do bloco: ' + SERIE)
}

console.log('fora do bloco: ' + SERIE)

