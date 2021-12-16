alert('Por favor me informe três números e vou te dizer qual a soma dos dois maiores.\nObs: Numeros repetidos serão desconsiderados!')
let a = Number(prompt('Primeiro número:'));
let b = Number(prompt('Segundo número:'));
let c = Number(prompt('Terceiro número:'));

let soma1 = (a + b)
let soma2 = (a + c)
let soma3 = (b + c)

switch (true) {
    case (a == b && a == c):
        alert('Todos os valores são iguais.\nO resultado da soma é: ' + soma1);
        break;
    case (a === b):
        alert('Detectei que dois valores são iguais.\nO resultado da soma é: ' + soma2);
        break;
    case (a === c || b === c):
        alert('Detectei que dois valores são iguais.\nO resultado da soma é: ' + soma1);
        break;
    case (true):
        switch (true) {
            case (((a > b && a > c) && (b > c))) || ((b > a && b > c) && (a > c)):
                alert('O resultado da soma é: ' + soma1);
                break;
            case (((b > a && b > c) && (c > a)) || (c > a && c > b) && (b > a)):
                alert('O resultado da soma é: ' + soma3);
                break;
            default:
                alert('O resultado da soma é: ' + soma2);
                break;
        }
        break;
    default:
        alert('Um dos valores inseridos não é um número, tente novamente.')
        break;
}