var a = Number(prompt("Informe três números e lhe direi a soma dos dois maiores deles\nNUMEROS REPETIDOS SERÃO DESCONSIDERADOS!\nPrimeiro número:"));
var b = Number(prompt("Segundo número:"));
var c = Number(prompt("Terceiro número"));

var soma1 = (a + b)
var soma2 = (a + c)
var soma3 = (b + c)

if (a == b && a == c) {
    var diga = ("Todos os valores são iguais.<br>O resultado da soma é " + soma1);
} else if (a == b) {
    var diga = ("Detectado repetição do primeiro e segundo valor.<br>O resultado da soma é " + soma2);
} else if (a == c) {
    var diga = ("Detectado repetição do primeiro e terceiro valor.<br>O resultado da soma é " + soma1);
} else if (b == c) {
    var diga = ("Detectado repetição do segundo e terceiro valor.<br>O resultado da soma é " + soma1);
} else if (a > b && a > c) {
    if (b > c) {
        var diga = ("O resultado da soma é " + soma1);
    } else {
        var diga = ("O resultado da soma é " + soma2);
    }
} else if (b > a && b > c) {
    if (a > c) {
        var diga = ("O resultado da soma é " + soma1);
    } else {
        var diga = ("O resultado da soma é " + soma3);
    }
} else if (c > a && c > b) {
    if (a > b) {
        var diga = ("O resultado da soma é " + soma1);
    } else {
        var diga = ("O resultado da soma é " + soma3);
    }
} else {
    var diga = ("Um dos valores inseridos não é um número, tente novamente.")
}

document.write(diga);