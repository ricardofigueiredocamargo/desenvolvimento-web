var resp = document.querySelector('#resp')

function verificarIdade() {
    var num = Number(document.querySelector('#inum').value)

    if (num < 0) {
        resp.innerHTML = `Impossível! Tente outra idade.`
    } else if (num >= 0 && num < 15) {
        resp.innerHTML = `Criança`
    } else if (num >= 15 && num < 30) {
        resp.innerHTML = `Jovem`
    } else if (num >= 30 && num < 60) {
        resp.innerHTML = `Adulto`
    } else if (num >= 60 && num < 120) {
        resp.innerHTML = `Idoso`
    } else {
        resp.innerHTML = `Imortal`
    }
}