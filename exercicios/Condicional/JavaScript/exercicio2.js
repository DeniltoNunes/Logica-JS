var a = Number(prompt("Informe um número, e lhe direi se o valor é positivo, negativo ou zero."));

if (a > 0) {
    var diga = ("O número " + a + " é positivo.")
} else if (a < 0) {
    var diga = ("O número " + a + " é negativo.")
} else if (a == 0) {
    var diga = ("O número é zero.")
} else {
    var diga = ("O valor não é um número.")
}

document.write(diga);