let contador = 1;
let valoresInseridos = ""
let total = 0
while (contador <= 10) {
    let numero = Number(prompt("Digite o " + contador + "º valor"));
    valoresInseridos = valoresInseridos + (`  ${numero}`);
    total += numero;
    contador += 1;
}

document.write("Os valores inseridos foram:" + valoresInseridos + "<br>A media foi: " + (total / 10));