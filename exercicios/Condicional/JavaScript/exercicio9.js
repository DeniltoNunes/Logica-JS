let contador = 1;
let valoresInseridos = ""
let total = 0

while (contador <= 6) {
    let numero = Number(prompt("Digite o " + contador + "º valor \nObs: Valores maiores que 72 não serão somados."));
    valoresInseridos = valoresInseridos + (`  ${numero}`);
    contador += 1;

    if (numero < 72) {
        total += numero;
    }
}

alert("A soma dos valores inseridos é: " + total + "\nOs valores inseridos foram:" + valoresInseridos);