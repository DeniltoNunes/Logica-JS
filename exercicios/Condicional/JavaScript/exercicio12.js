let parcela = Number(prompt("Olá, bem vindo(a) a Loja Remi du Fromage :D\nEstamos com uma promoção onde cada capacete artesanal para tartaruga custa R$18.230 e pode ser pago em até 15 vezes sem juros.\nInforme a quantidade de parcelas para ser realizado o pagamento: "));
let produto = Number(18230);

if (parcela <= 15 && parcela > 0) {
    let valor = (produto / parcela);
    let formatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.write("O valor de cada parcela é de " + formatado);
} else {
    document.write("Valor de parcelas invalido.");
}