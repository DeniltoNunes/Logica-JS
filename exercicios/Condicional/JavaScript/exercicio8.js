let valor = 0
let contador = 1;

while (contador <= 10) {
    let numero = Number(prompt("Insira o " + contador + "º número:"));
    letra = isNaN(numero)

    while (letra == true) {
        numero = parseInt(prompt("Valor inválido. \nInsira o " + contador + "º número:"));
        letra = isNaN(numero);
    }

    valor += numero
    contador += 1;
}

alert("A soma de todos os números é: " + valor);