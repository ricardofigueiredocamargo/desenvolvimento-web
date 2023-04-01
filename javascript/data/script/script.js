var data = new Date()

document.write(data.toString())

// adicionar / remover dias
document.write('<hr>')
data.setDate(data.getDate() + 1)
document.write(data.toString())

// adicionar / remover meses
document.write('<hr>')
data.setMonth(data.getMonth() - 1)
document.write(data.toString())

// adicionar / remover anos
document.write('<hr>')
data.setFullYear(data.getFullYear() + 223)
document.write(data.toString())

document.write('<br><br><br>')

// 15/01/2017 
var data1 = new Date()

// 23/02/2017
var data2 = new Date(2023, 3, 4)

document.write(data1.toString())
document.write('<hr>')
document.write(data2.toString())
document.write('<br><br><br>')

// converter para algo que possamos calcular
document.write(data1.getTime())
document.write('<hr>')
document.write(data2.getTime())
document.write('<br><br><br>')

// 1 de janeiro de 1970

// econtrar a quantidade de milissegundos entre data1 e data2
var milissegundosEntreDatas = Math.abs(data1.getTime() - data2.getTime())
document.write(milissegundosEntreDatas)
document.write('<br><br><br>')

// 1 dia tem 24 horas, cada hora tem 60 minutos
// cada minuto tem 60 segundos
// cada segundo tem 1000 milissegundos
// então, quantos milissegundos existem em um dia?
var milissegundosEntreDias = (1*24*60*60*1000)
document.write('1 dia tem: ' + milissegundosEntreDias + ' segundos')
document.write('<br><br><br>')

// 
document.write(Math.ceil(milissegundosEntreDatas / milissegundosEntreDias))