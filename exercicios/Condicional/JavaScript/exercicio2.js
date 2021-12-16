let a = Number(prompt("Informe um número, e lhe direi se o valor é positivo, negativo ou zero."));
let diga = ''

switch (true) {
    case (a > 0):
        diga = ("O número " + a + " é positivo.");
        break;
    case (a < 0):
        diga = ("O número " + a + " é negativo.");
        break;
    case (a == 0):
        diga = ("O número é zero.");
        break;
    default:
        diga = ("O valor não é um número.");
        break;
}

alert(diga);