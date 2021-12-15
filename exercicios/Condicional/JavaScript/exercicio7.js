var a = Number(prompt("Informe quatro números e lhe direi qual o maior, o primeiro e o ultimo valor.\nPrimeiro número:"));
var b = Number(prompt("Segundo número:"));
var c = Number(prompt("Terceiro número:"));
var d = Number(prompt("Quarto número:"));

if (a > b && a > c && a > d) {
    var diga = ("O maior valor é o " + a)
} else if (b > a && b > c && b > d) {
    var diga = ("O maior valor é o " + b)
} else if (c > b && c > a && c > d) {
    var diga = ("O maior valor é o " + c)
} else if (d > b && d > a && d > a) {
    var diga = ("O maior valor é o " + d)
}
document.write(diga + "<br>O primeiro valor é o " + a + "<br>E o ultimo valor é o " + d);