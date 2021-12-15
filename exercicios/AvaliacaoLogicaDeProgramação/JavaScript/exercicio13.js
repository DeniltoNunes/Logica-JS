alert('Seja bem vindo!😃');
alert('Insira dez números para a soma.')

let numeros = [];
let impressao = [];
let contador = 1;

while (contador <= 10) {
    let valor = parseInt(prompt('Informe o ' + contador + 'º número: \nNúmeros maiores que 40 não entrarão na soma'));
    let letra = isNaN(valor);
    while (letra == true) {
        valor = parseInt(prompt('Valor inválido. \nInforme o ' + contador + 'º número:'));
        letra = isNaN(valor);
    }
    contador += 1;
    switch (true) {
        case (valor < 40):
            let adicionar = numeros.push(valor);
            break;
    }
    let adicionar1 = impressao.push('\n' + valor);
}

alert('Os números informados foram:' + impressao);
let soma = numeros.reduce((total, currentElement) => total + currentElement);

alert('A soma de todos os valores é: ' + soma);