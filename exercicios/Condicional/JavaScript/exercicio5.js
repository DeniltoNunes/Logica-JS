alert("Informe dois números e vou te dizer qual é o maior.")
let a = Number(prompt("Primeiro número:"));
let b = Number(prompt("Segundo número:"));

switch (true) {
    case (a == b):
        alert("Os números são iguais");
        break;
    case (a > b):
        alert("O primeiro número (" + a + ") é o maior.");
        break;
    case (b > a):
        alert("O segundo número (" + b + ") é o maior.");
        break;
    default:
        alert("Um dos valores não é um número");
        break;
}