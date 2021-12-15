//1. Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.

let numero = parseInt(prompt('Insira um valor:'));
switch (true) {
    case (numero > 0):
        alert('O número é positivo.');
        break;
    case (numero < 0):
        alert('O número é negativo.');
        break;
    case (numero === 0):
        alert('O número é zero.');
        break;
    default:
        alert('O valor inserido não é um número.')
}