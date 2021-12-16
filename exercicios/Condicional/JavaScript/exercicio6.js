alert('Seja bem vindo!😃');
alert('Informe 10 números e lhe direi quais foram e a média aritmética deles.');

let numeros = [];
let impressao = [];
let contador = 1;

while (contador <= 10) {
    let valor = parseInt(prompt('Informe o ' + contador + 'º número:'));
    let letra = isNaN(valor);
    while (letra == true) {
        valor = parseInt(prompt('Valor inválido. \nInforme o ' + contador + 'º número:'));
        letra = isNaN(valor);
    }
    contador += 1;
    let adicionar = numeros.push(valor);
    let adicionar1 = impressao.push('\n' + valor);
}

alert('Os números informados foram:' + impressao);
let total = numeros.reduce((total, currentElement) => total + currentElement);
let media = total / 10;

alert('A média aritmética é: ' + media);