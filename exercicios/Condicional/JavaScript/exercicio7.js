alert("Informe quatro números e lhe direi qual o maior, o primeiro e o ultimo número.")
let a = Number(prompt("Primeiro número:"));
let b = Number(prompt("Segundo número:"));
let c = Number(prompt("Terceiro número:"));
let d = Number(prompt("Quarto número:"));

switch (true) {
    case (a > b && a > c && a > d):
        alert("O maior número é: " + a + "\nO primeiro número é: " + a + "\nO ultimo número é: " + d);
        break;
    case (b > a && b > c && b > d):
        alert("O maior número é o " + b + "\nO primeiro número é: " + a + "\nO ultimo número é: " + d);
        break;
    case (c > b && c > a && c > d):
        alert("O maior número é o " + c + "\nO primeiro número é: " + a + "\nO ultimo número é: " + d);
        break;
    case (d > b && d > a && d > a):
        alert("O maior número é o " + d + "\nO primeiro número é: " + a + "\nO ultimo número é: " + d);
        break;
    default:
        alert("Um dos valores inseridos não é um número.");
        break;
}