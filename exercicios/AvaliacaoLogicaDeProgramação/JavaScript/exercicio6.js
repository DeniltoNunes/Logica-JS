alert('Seja bem vindo!😃');
var valor1 = parseInt(prompt('Informe o primeiro valor:'));
var valor2 = parseInt(prompt('Informe o segundo valor:'));

switch (true) {
    case (valor1 === valor2):
        alert('Os números são iguais.');
        break;
    case (valor1 > valor2):
        alert('O primeiro é maior.');
        break;
    case (valor1 < valor2):
        alert('O segundo é maior.');
        break;
    default:
        alert('Um dos valores não é um número.');
        break;
}