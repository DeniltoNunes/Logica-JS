alert('Por favor me informe três números e lhe direi qual a soma dos dois maiores.\nOBS: Numeros repetidos serão desconsiderados!')
let a = Number(prompt('Primeiro número:'));
let b = Number(prompt('Segundo número:'));
let c = Number(prompt('Terceiro número:'));

let soma1 = (a + b)
let soma2 = (a + c)
let soma3 = (b + c)

switch (true) {
    default:
        alert('Um dos valores inseridos não é um número, tente novamente.')
        break;
    case (a == b && a == c):
        alert('Todos os valores são iguais.\nO resultado da soma é: ' + soma1);
        break;
    case (a === b):
        alert('Detectado repetição do primeiro e segundo valor.\nO resultado da soma é: ' + soma2);
        break;
    case (a === c):
        alert('Detectado repetição do primeiro e terceiro valor.\nO resultado da soma é: ' + soma1);
        break;
    case (b === c):
        alert('Detectado repetição do segundo e terceiro valor.\nO resultado da soma é: ' + soma1);
        break;
    case (a > b && a > c):
        switch (true) {
            case (b > c):
                alert('O resultado da soma é: ' + soma1);
                break;
            default:
                alert('O resultado da soma é: ' + soma2);
                break;
        }
        break;
    case (b > a && b > c):
        switch (true) {
            case (a > c):
                alert('O resultado da soma é: ' + soma1);
                break;
            default:
                alert('O resultado da soma é: ' + soma3);
                break;
        }
        break;
    case (c > a && c > b):
        switch (true) {
            case (a > b):
                alert('O resultado da soma é: ' + soma1);
                break;
            default:
                alert('O resultado da soma é: ' + soma3);
                break;
        }
}