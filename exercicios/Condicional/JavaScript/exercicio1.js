let a = Number(prompt("Informe 2 números e te responderei o maior.\nInsira o primeiro número:"));
let b = Number(prompt("Insira o segundo número:"));
let diga = ''

switch (true) {
    case (a > b):
        diga = ("O primeiro valor (" + a + ") é o maior número.");
        break;
    case (b > a):
        diga = ("O segundo valor (" + b + ") é o maior número.");
        break;
    case (b == a):
        diga = ("Os números são iguais.");
        break;
    default:
        diga = ("Algum caracter inserido não é um número, tente novamente.");
        break;
}

alert(diga);