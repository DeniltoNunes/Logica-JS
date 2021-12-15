alert('Olá, bem vindo(a) a Loja FabiDRONES 😃');
alert('Estamos com uma promoção onde cada drone artesanal custa R$8.190 e pode ser pago em até 15 vezes sem juros.');

let parcela = parseInt(prompt('Em quantas vezes você gostaria de parcelar? \nDigite "1" para pagamento à vista'));
let letra = isNaN(parcela);
let preco = 8190;

while (parcela < 1 || parcela > 15 || letra == true) {
    parcela = parseInt(prompt('Número de parcelas inválido. \nEm quantas vezes você gostaria de parcelar? \nDigite "1" para pagamento à vista'));
    letra = isNaN(parcela);
}

let pagamento = preco / parcela;
let real = pagamento.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

switch (true) {
    case (parcela == 1):
        alert('O valor a vista é de: ' + real);
        break;
    case (parcela > 1 && parcela <= 15):
        alert('O pagamento será feito em ' + parcela + ' parcelas \nO valor de cada parcela será de: ' + real);
        break;
}