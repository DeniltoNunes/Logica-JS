alert('Seja bem vindo!😃');
var numero1 = parseInt(prompt('Insira o primeiro valor:'));
var numero2 = parseInt(prompt('Insira o segundo valor:'));

function inicio() {
    var escolha = parseInt(prompt('Selecione uma opção \n1 - Subtrair \n2 - Somar \n3 - Multiplicar \n4 - Dividir \n5 - Sair'));

    switch (escolha) {
        case 1:
            sub();
            break;
        case 2:
            som();
            break;
        case 3:
            mul();
            break;
        case 4:
            div();
            break;
        case 5:
            sair();
            break;
        default:
            erro();
            break;
    }
}

function sub() {
    var subtracao = (numero1 - numero2);
    alert('O resultado é: ' + subtracao);
    inicio();
}

function som() {
    var soma = (numero1 + numero2);
    alert('O resultado é: ' + soma);
    inicio();
}

function mul() {
    var multiplicacao = (numero1 * numero2);
    alert('O resultado é: ' + multiplicacao);
    inicio();
}

function div() {
    var divisao = (numero1 / numero2);
    alert('O resultado é: ' + divisao);
    inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert('Volte sempre!😃');
        window.close();
    } else {
        inicio();
    }
}

function erro() {
    alert('Por favor, informe um número entre 1 a 5');
    inicio();
}

inicio();