var nome ="Ryan"

var notaPrimeiroBimestre = 8
var notaSegundoBimestre = 6
var notaTerceiroBimestre = 3
var notaQuartoBimestre = 9

var notaFinal = (notaPrimeiroBimestre+notaSegundoBimestre+notaTerceiroBimestre+notaQuartoBimestre)/4

var notaFixada = notaFinal.toFixed(1)//toFixed arredonda o numero decimal da notaFinal, dependendo de quantas casas decimais ele é definido

if (notaFixada > 6) {
  console.log("Bem vindo "+nome+", sua nota é " + notaFixada + ", você está Aprovado")
}
else if (notaFixada < 6) {
  console.log("Bem vindo "+nome+", sua nota é " + notaFixada + ", você está Reprovado")
}