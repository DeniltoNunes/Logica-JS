var a = Number(prompt("Informe três números e lhe direi qual o maior deles\nNUMEROS REPETIDOS SERÃO DESCONSIDERADOS!\nPrimeiro número:"));
var b = Number(prompt("Segundo número:"));
var c = Number(prompt("Terceiro número"));

if (a == b && a == c) {
    var diga = ("Todos os valores são iguais.")
} else if (a == b) {
    var diga = ("Detectado repetição do primeiro e segundo valor.<br>O maior número é o " + c);
} else if (a == c) {
    var diga = ("Detectado repetição do primeiro e terceiro valor.<br>O maior número é o " + b);
} else if (b == c) {
    var diga = ("Detectado repetição do segundo e terceiro valor.<br>O maior número é o " + a);
} else if (a > b && a > c) {
    var diga = ("O maior número é o " + a);
} else if (b > a && b > c) {
    var diga = ("O maior número é o " + b);
} else if (c > a && c > b) {
    var diga = ("O maior número é o " + c);
} else {
    var diga = ("Um dos valores inseridos não é um número, tente novamente.")
}

document.write(diga);