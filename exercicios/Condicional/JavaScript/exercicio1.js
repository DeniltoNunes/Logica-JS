var a = Number(prompt("Informe 2 números e te responderei o maior.\nInsira o primeiro número:"));
var b = Number(prompt("Insira o segundo número:"));

if (a > b) {
    var diga = ("O " + a + " é o maior número.")
} else if (b > a) {
    var diga = ("O " + b + " é o maior número.")
} else if (b == a) {
    var diga = ("Os números são iguais.")
} else {
    var diga = ("Algum caracter inserido não é um número, tente novamente.")
}

document.write(diga);