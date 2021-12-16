alert("Olá, bem vindo(a) a Loja Remi du Fromage 😃");
alert("Estamos com uma promoção onde cada capacete artesanal para tartaruga custa R$18.230 e pode ser pago em até 15 vezes sem juros.");

let parcela = Number(prompt("Informe a quantidade de parcelas para ser realizado o pagamento\nCaso o pagamento seja a vista digite 1:"));
let produto = Number(18230);
let letra = isNaN(parcela);

while (parcela <= 0 || letra == true) {
    parcela = Number(prompt('Preço inválido. \nInforme a quantidade de parcelas para ser realizado o pagamento\nCaso o pagamento seja a vista digite 1:'));
    letra = isNaN(parcela);
}

let valor = (produto / parcela);
let formatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

switch (true) {
    case (parcela <= 15 && parcela > 1):
        alert("O valor de cada parcela é de " + formatado);
        break;
    default:
        alert("O valor a vista é de " + formatado);
        break;
}