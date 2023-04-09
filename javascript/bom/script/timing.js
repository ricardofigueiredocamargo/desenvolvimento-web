var t = 5
var f = function() {
    document.write(t + '<br>')
    if (t === 0) {
        clearInterval(n)
    }
    t--
}

var n = setInterval(f, 500)

var i = 100
var acao = function() {
    document.write(i + '<br>')
    if (i === 95) {
        clearInterval(x)
    }
    i--
}

var x = setInterval(acao, 1000)