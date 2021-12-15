var a = Number(prompt("Informe dois números e lhe direi qual o maior.\nPrimeiro número:"));
var b = Number(prompt("Segundo número:"));

if (a == b) {
    var diga = ("Números iguais")
} else if (a > b) {
    var diga = ("Primeiro é maior")
} else if (b > a) {
    var diga = ("Segundo é maior")
} else {
    var diga = ("Um dos valores não é um número")
}
document.write(diga);