let valor = 0
let contador = 1;

while (contador <= 2) {
    let numero = Number(prompt("Insira o " + contador + "º valor para o calculo de média."));
    valor += numero
    contador += 1;
}

let media = (valor / 2)
alert("A média aritmética dos valores é: " + media.toFixed(2));
