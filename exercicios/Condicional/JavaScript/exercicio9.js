let contador = 1;
let valoresInseridos = ""
let total = 0
while (contador <= 6) {
    let numero = Number(prompt("Digite o " + contador + "º valor \nVALORES MAIORES QUE 72 NÃO SERÃO SOMADOS"));
    valoresInseridos = valoresInseridos + (`  ${numero}`);
    contador += 1;
    if (numero < 72) {
        total += numero;
    }
}

document.write("A soma dos valores inseridos \u00e9: " + total + "<br>Os valores inseridos foram:" + valoresInseridos);