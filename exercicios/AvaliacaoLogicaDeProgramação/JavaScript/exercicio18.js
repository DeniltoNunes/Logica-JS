alert('Olá, bem vindo(a) a Wesley Peças Automotivas! 😃');
alert('Para realizar a sua compra irei precisar de alguns valores.');

let preco = parseInt(prompt('Qual o preço do produto?'));
let letra = isNaN(preco);

while (preco <= 0 || letra == true) {
    preco = parseInt(prompt('Preço inválido. \nQual o preço do produto mesmo?'));
    letra = isNaN(preco);
}

let lucro = parseInt(prompt('Qual a margem de lucro do produto (em porcentagem)? \nObs: O valor de lucro será em porcentagem, porém não precisa escrever "%".'));
let letra1 = isNaN(lucro);

while (lucro <= 0 || letra1 == true) {
    lucro = parseInt(prompt('Margem de lucro inválida. \nQual a margem de lucro do produto (em porcentagem)? \nObs: O valor de lucro será em porcentagem, porém não é necessário escrever "%".'));
    letra1 = isNaN(lucro);
}

let valor = preco + (preco * (lucro / 100));
let real = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

alert('O valor a vista é de: ' + real);