let n1 = parseInt(prompt('Digite a sua 1ª nota:'));
let n2 = parseInt(prompt('Digite a sua 2ª nota:'));
let media = (n1 + n2) / 2;

switch (true) {
    case (media >= 7):
        alert('Aprovado sua média é: ' + media)
        break;
    default:
        alert('Reprovado sua média é: ' + media)
        break;
}