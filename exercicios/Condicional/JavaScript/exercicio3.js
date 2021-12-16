alert('Por favor me informe três números e vou te dizer qual o maior deles\nObs: Numeros repetidos serão desconsiderados!')
let a = Number(prompt('Primeiro número:'));
let b = Number(prompt('Segundo número:'));
let c = Number(prompt('Terceiro número'));

switch (true) {
    default:
        alert('Um dos valores inseridos não é um número, tente novamente.')
        break;
    case (a == b && a == c):
        alert('Todos os valores são iguais.');
        break;
    case (a === b):
        alert('Detectei que dois valores são iguais.\nO maior número é: ' + c);
        break;
    case (a === c):
        alert('Detectei que dois valores são iguais.\nO maior número é: ' + b);
        break;
    case (b === c):
        alert('Detectei que dois valores são iguais.\nO maior número é: ' + a);
        break;
    case (a > b && a > c):
        alert('O maior número é: ' + a);
        break;
    case (b > a && b > c):
        alert('O maior número é: ' + b);
        break;
    case (c > a && c > b):
        alert('O maior número é: ' + c);
        break;
}